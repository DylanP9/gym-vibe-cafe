# Square Checkout Readiness

## Current Status

Square checkout is not configured and is not live.

The website includes a disabled planning basket and a guarded server API route for future Square-hosted checkout. The public UI tells customers that in-site Square checkout is being prepared.

Current live customer ordering is handled externally through the approved Just Eat menu:

```text
https://www.just-eat.co.uk/restaurants-vibe-cafe-pollokshields/menu
```

## Already Built

- Menu items with simple base prices can be added to a planning basket.
- Basket quantities can be changed or removed.
- Basket contents are stored locally in the visitor browser for review.
- The API route at `/api/checkout/square` validates item IDs and quantities against local menu data.
- The API route can create a Square-hosted checkout link only when explicitly enabled and configured.
- The API route keeps Square credentials server-side.
- A cautious checkout status page exists at `/checkout/success`.

## Currently Disabled

- Live payment.
- Card collection.
- Checkout button activation.
- In-site delivery promises.
- In-site collection promises.
- Meal-prep ordering.
- Square credential configuration.

## Required Environment Variables

Server-side values for sandbox testing:

```bash
SQUARE_CHECKOUT_ENABLED=true
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_LOCATION_ID=your-square-location-id
SQUARE_ENVIRONMENT=sandbox
```

Public value needed to show the active Square checkout button:

```bash
NEXT_PUBLIC_SQUARE_CHECKOUT_ENABLED=true
```

Production should only use:

```bash
SQUARE_ENVIRONMENT=production
```

after the owner approves checkout and test orders have been completed.

## Sandbox Testing Checklist

- Confirm every orderable item has a verified price.
- Confirm which items should be orderable online.
- Confirm whether build-your-own, coffee sizes, drink options and add-ons need separate Square line items.
- Add sandbox Square access token and location ID.
- Set `SQUARE_CHECKOUT_ENABLED=true`.
- Set `NEXT_PUBLIC_SQUARE_CHECKOUT_ENABLED=true`.
- Place a small sandbox test order.
- Confirm Square receives the correct item names, quantities and prices.
- Confirm customer redirect behaviour after payment.
- Confirm the cafe owner understands where Square orders will appear.
- Confirm refunds, failed payments and cancelled payments handling.
- Confirm privacy wording remains accurate.

## Live Launch Checklist

- Owner approves online checkout wording and operating process.
- Owner confirms current prices and availability.
- Owner confirms opening hours and any order cutoff rules.
- Owner supplies production Square credentials.
- Production environment variables are configured securely.
- A real low-value live payment is tested.
- Checkout is monitored during the first live trading period.
- Staff know how to handle incoming Square orders.
- Website copy is changed from "checkout being prepared" to live checkout wording only after approval.

## Risks And Safety Notes

- Do not add Square credentials to the repo.
- Do not expose Square access tokens in browser code.
- Do not enable checkout without owner approval.
- Do not claim delivery or collection unless operationally confirmed.
- Do not make meal prep orderable until current options, prices and collection rules are supplied.
- Do not make complex menu options orderable until variants and add-ons are modelled clearly.
- Keep the API disabled by default.

## Future Click-And-Collect Upgrade

A true click-and-collect version should collect customer name, phone number and pickup preference, then create a Square order with pickup fulfilment after the cafe confirms the operational rules. That should be a separate approved phase after the disabled basket and basic Square checkout foundation are reviewed.
