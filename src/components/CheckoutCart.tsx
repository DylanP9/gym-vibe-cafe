"use client";

import { useState } from "react";
import type { CartItem } from "@/types/cart";
import { businessInfo } from "@/data/businessInfo";

interface CheckoutCartProps {
  items: CartItem[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

function formatMoney(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(pence / 100);
}

export function CheckoutCart({
  items,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
}: CheckoutCartProps) {
  const totalPence = items.reduce(
    (total, item) => total + item.pricePence * item.quantity,
    0,
  );

  async function checkout() {
    const response = await fetch("/api/checkout/square", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || typeof data?.checkoutUrl !== "string") {
      throw new Error(data?.error ?? "Checkout is not available right now.");
    }

    window.location.href = data.checkoutUrl;
  }

  return (
    <aside
      className="sticky top-28 rounded-2xl border border-[#a42425]/45 bg-[#11100f] p-4 shadow-2xl shadow-black/25"
      aria-label="Checkout basket"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d14a4b]">
            Basket
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.03em] text-[#faf6ee]">
            Checkout
          </h2>
        </div>
        {items.length ? (
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#d9d0c4] hover:border-white/30 hover:text-white"
          >
            Clear
          </button>
        ) : null}
      </div>

      {items.length ? (
        <>
          <ul className="mt-5 space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-3"
              >
                <div className="flex justify-between gap-3">
                  <p className="font-bold leading-6 text-[#faf6ee]">{item.name}</p>
                  <p className="shrink-0 font-bold text-[#efcb9c]">{item.price}</p>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center rounded-full border border-white/15">
                    <button
                      type="button"
                      onClick={() => onDecrement(item.id)}
                      className="min-h-10 px-3 text-lg font-bold text-white"
                      aria-label={`Remove one ${item.name}`}
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center text-sm font-bold text-[#f4efe6]">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onIncrement(item.id)}
                      className="min-h-10 px-3 text-lg font-bold text-white"
                      aria-label={`Add one ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="text-xs font-bold uppercase tracking-[0.12em] text-[#d7cec1] underline decoration-[#a42425] underline-offset-4 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#c9c0b2]">
                Total
              </span>
              <span className="text-2xl font-black text-white">
                {formatMoney(totalPence)}
              </span>
            </div>
            <CheckoutButton onCheckout={checkout} />
            <p className="mt-3 text-xs leading-5 text-[#a89f93]">
              Payment is completed securely on Square. Please confirm current
              availability with {businessInfo.name} if you are ordering close to
              closing time.
            </p>
          </div>
        </>
      ) : (
        <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-[#c9c0b2]">
          Add menu items to start a Square checkout.
        </p>
      )}
    </aside>
  );
}

function CheckoutButton({ onCheckout }: { onCheckout: () => Promise<void> }) {
  const [status, setStatus] = useCheckoutStatus();

  async function handleClick() {
    setStatus({ state: "loading" });

    try {
      await onCheckout();
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Checkout is not available right now.",
      });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={status.state === "loading"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#ba3032] bg-[#a42425] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_28px_-14px_rgba(164,36,37,0.85)] transition hover:border-[#cc3e40] hover:bg-[#b92c2e] disabled:cursor-wait disabled:opacity-70"
      >
        {status.state === "loading" ? "Creating checkout..." : "Checkout with Square"}
      </button>
      {status.state === "error" ? (
        <p className="mt-3 rounded-lg border border-[#a42425]/50 bg-[#211516] p-3 text-sm leading-6 text-[#f1d8bc]">
          {status.message}
        </p>
      ) : null}
    </>
  );
}

function useCheckoutStatus() {
  return useState<
    | { state: "idle" }
    | { state: "loading" }
    | { state: "error"; message: string }
  >({ state: "idle" });
}
