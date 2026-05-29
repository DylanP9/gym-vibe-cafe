import { NextResponse } from "next/server";
import { orderableMenuItemsById } from "@/lib/menuPricing";
import { siteConfig } from "@/data/siteConfig";

type CheckoutCartItem = {
  id?: unknown;
  quantity?: unknown;
};

const squareApiVersion = "2026-05-20";

function squareBaseUrl() {
  return process.env.SQUARE_ENVIRONMENT === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";
}

export async function POST(request: Request) {
  if (process.env.SQUARE_CHECKOUT_ENABLED !== "true") {
    return NextResponse.json(
      { error: "Online checkout is being prepared and is not live yet." },
      { status: 503 },
    );
  }

  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  const locationId = process.env.SQUARE_LOCATION_ID;

  if (!accessToken || !locationId) {
    return NextResponse.json(
      { error: "Square checkout is not configured yet." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as {
    items?: CheckoutCartItem[];
  } | null;

  if (!body?.items?.length) {
    return NextResponse.json(
      { error: "Add at least one item before checkout." },
      { status: 400 },
    );
  }

  const lineItems = body.items.map((cartItem) => {
    const id = typeof cartItem.id === "string" ? cartItem.id : "";
    const menuItem = orderableMenuItemsById.get(id);
    const quantity =
      typeof cartItem.quantity === "number"
        ? Math.min(Math.max(Math.floor(cartItem.quantity), 1), 20)
        : 1;

    if (!menuItem) {
      return null;
    }

    return {
      name: menuItem.name,
      quantity: String(quantity),
      item_type: "ITEM",
      base_price_money: {
        amount: menuItem.pricePence,
        currency: "GBP",
      },
    };
  });

  if (lineItems.some((item) => item === null)) {
    return NextResponse.json(
      { error: "Your basket contains an item that is no longer available online." },
      { status: 400 },
    );
  }

  const checkoutOptions = siteConfig.url
    ? { redirect_url: new URL("/checkout/success", siteConfig.url).toString() }
    : undefined;

  const squareResponse = await fetch(
    `${squareBaseUrl()}/v2/online-checkout/payment-links`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Square-Version": squareApiVersion,
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        description: "Gym Vibe Cafe website order",
        order: {
          location_id: locationId,
          source: {
            name: "Gym Vibe Cafe website",
          },
          line_items: lineItems,
        },
        checkout_options: checkoutOptions,
        payment_note: "Created from the Gym Vibe Cafe website menu.",
      }),
    },
  );

  const data = await squareResponse.json().catch(() => null);

  if (!squareResponse.ok) {
    return NextResponse.json(
      {
        error: "Square could not create a checkout link.",
        details: data?.errors,
      },
      { status: 502 },
    );
  }

  const checkoutUrl = data?.payment_link?.url;

  if (typeof checkoutUrl !== "string") {
    return NextResponse.json(
      { error: "Square did not return a checkout URL." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    checkoutUrl,
    orderId: data.payment_link.order_id,
  });
}
