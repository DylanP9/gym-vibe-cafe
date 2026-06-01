# Gym Vibe Cafe Website

## Current Status

Gym Vibe Cafe is a premium, mobile-first local business website for a cafe in Kinning Park, Glasgow. It helps visitors browse the in-store menu, check opening hours, call the cafe, open verified directions, follow Instagram and ask about meal-prep availability.

The website has Square checkout foundations in place, but checkout is intentionally disabled. Customers can review a future planning basket, but they cannot place a real online order or complete payment until Square credentials, sandbox testing and business approval are complete.

For external ordering, the customer-facing Just Eat menu action currently opens the approved Just Eat menu:

```text
https://www.just-eat.co.uk/restaurants-vibe-cafe-pollokshields/menu
```

Current public pages:

| Route | Purpose |
| --- | --- |
| `/` | Homepage with brand story, menu highlights, location, meal-prep, gallery placeholders, FAQs and Instagram CTA |
| `/menu` | App-style menu browser with categories, prices, macros, disabled planning basket and complete text menu reference |
| `/location` | Verified address, phone, directions, Instagram and opening hours |
| `/meal-prep` | Cautious meal-prep information; no ordering or payment |
| `/privacy` | Privacy notice for analytics, external links and future Square checkout |
| `/checkout/success` | Checkout status page kept cautious while checkout is not live |

## Redesign Summary

The site has been redesigned around the supplied Gym Vibe Cafe identity and menu-board artwork:

- Dark black-led visual system with deep red accents, off-white type and sharper menu-board inspired panels.
- Stronger homepage journey: hero, quick visit information, popular food, high-protein meals, smoothies and coffee, meal prep, menu-board reference, location, photography placeholders, FAQs and Instagram.
- More direct customer copy for Kinning Park, Glasgow Southside, Scottish breakfasts, filled rolls, high-protein meals, smoothies, coffee and meal prep.
- Cleaner menu browsing with desktop category sidebar, mobile category tabs, visible selected category and clearer macro display.
- Reduced checkout emphasis because in-site Square checkout is not live.
- Real supplied logo, menu-board and meal-prep reference assets are used. Missing food and venue photography remains clearly marked as future owner-supplied photography.

## What Works Now

- Polished dark/red Gym Vibe Cafe brand presentation based on supplied assets.
- Mobile-first header, navigation and sticky Call / Directions / Instagram action bar.
- Menu category browser with desktop sidebar and mobile tabs.
- Menu cards with prices, popular labels, vegetarian labels and macro displays where supplied.
- Square checkout foundations remain in the codebase, but customer-facing checkout is not live.
- External Just Eat menu links are kept cautious and separate from in-site checkout.
- Square checkout API foundation guarded by activation flags and server credentials.
- LocalBusiness structured data using verified business facts only.
- Configurable canonical URLs, sitemap, robots and Search Console verification.
- Vercel Web Analytics for anonymous page-view reporting.

## What Is Disabled

- Live Square checkout.
- Card collection on the website.
- In-site delivery or collection promises.
- Meal-prep ordering or payment.
- Custom click tracking or advertising pixels.
- Fake reviews, fake ordering links, fake delivery links or invented photos.

## Owner Assets Still Needed

- Real food photography for popular dishes, filled rolls, high-protein meals and desserts.
- Real smoothie and coffee photography.
- Interior, counter and exterior photos of the cafe.
- High-resolution logo and favicon source files if available.
- Approved menu-board artwork or export if the board changes.
- Approved Google Business Profile and Google reviews links.

## Owner Approval Needed Before Launch

- Final menu names, prices, availability and high-protein macros.
- Opening hours, holiday-hours process and breakfast/lunch until 4pm wording.
- Meal-prep wording, availability expectations and whether any prices should be published.
- Whether the Just Eat link should remain visible.
- Whether and when in-site Square checkout should be enabled.
- Final copy approval for homepage, menu, location, meal-prep, privacy and checkout status pages.
- Official domain, Search Console verification and analytics approval.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development site:

```bash
npm run dev
```

Then visit `http://localhost:3000`.

Validate the project:

```bash
npm run lint
npm run build
```

Preview a production build:

```bash
npm run start
```

## Verified Business Information

Keep published business content aligned with the supplied verified information:

| Item | Verified supplied value |
| --- | --- |
| Name | Gym Vibe Cafe |
| Address | 89 Middlesex St, Kinning Park, Glasgow G41 1EE |
| Phone | 0141 286 0559 |
| Phone link | `tel:+441412860559` |
| Instagram | `@gymvibecafe` |
| Tagline | Eat Good. Feel Better. Fuel Your Vibe. |
| Google rating snapshot | 4.9 stars from 121 reviews, supplied May 2026 |
| Breakfast and lunch | Available until 4pm |

Supplied opening hours:

| Day | Hours |
| --- | --- |
| Monday | 7:00 am - 4:00 pm |
| Tuesday | 7:00 am - 4:00 pm |
| Wednesday | 7:00 am - 4:00 pm |
| Thursday | 7:00 am - 4:00 pm |
| Friday | 7:00 am - 4:00 pm |
| Saturday | Closed |
| Sunday | 9:00 am - 3:00 pm |

## Updating Content

- Business facts, address, phone, hours, Maps URL and Instagram: `src/data/businessInfo.ts`
- Menu items, prices, macros, popular labels and availability: `src/data/menu.ts`
- FAQ content: `src/data/faqs.ts`
- Image paths and dimensions: `src/data/siteAssets.ts`
- SEO/site config and optional URLs: `src/data/siteConfig.ts`
- Reusable UI sections: `src/components/`

Only use approved real cafe, food, drink, interior and exterior photography. Do not add stock-style or invented food photos.

## SEO, Domain and Analytics

The site does not hard-code a fake production domain. When the official domain is approved, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-confirmed-domain.example
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-real-google-verification-value
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=your-approved-google-reviews-link
```

After deployment:

- Validate canonical URLs.
- Validate `/sitemap.xml`.
- Validate `/robots.txt`.
- Validate LocalBusiness structured data.
- Submit the sitemap in Google Search Console.
- Confirm Vercel Web Analytics is receiving anonymous page views.

## Square Checkout Readiness

Square checkout is not live. The planning basket is for proposal review and future testing only.

To activate Square later, the owner must approve checkout, supply real sandbox credentials, complete sandbox order testing, confirm operational handling and explicitly enable the checkout flags.

Required server-side values for sandbox testing:

```bash
SQUARE_CHECKOUT_ENABLED=true
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_LOCATION_ID=your-square-location-id
SQUARE_ENVIRONMENT=sandbox
```

Required public value to show the live Square checkout button:

```bash
NEXT_PUBLIC_SQUARE_CHECKOUT_ENABLED=true
```

Use `SQUARE_ENVIRONMENT=production` only after the owner has supplied production credentials, approved wording and completed live test orders. See `docs/square-checkout-readiness.md` before activating Square.

## Owner Confirmation Checklist

- Confirm current opening hours and holiday-hours process.
- Confirm all menu items, prices and availability.
- Confirm smoothie and coffee prices.
- Confirm published high-protein macros may be used and maintained.
- Confirm meal-prep availability, prices and wording.
- Confirm whether online checkout or click-and-collect should go live.
- Confirm operational handling for any future Square orders.
- Supply approved real photography and asset permissions.
- Supply high-resolution logo/favicon assets if available.
- Confirm official domain.
- Supply Google Search Console verification.
- Supply official Google Business Profile and Google reviews links.
- Approve final wording before launch.

## Launch Checklist

- Run `npm run lint`.
- Run `npm run build`.
- Test desktop and mobile layouts.
- Test mobile navigation, menu tabs and disabled basket state.
- Test Call, Directions and Instagram actions.
- Confirm online checkout is disabled unless Square launch is approved.
- Confirm no fake payment, delivery, collection or booking promises exist.
- Confirm address, phone and hours are correct.
- Verify metadata, sitemap, robots and structured data in production.
- Submit sitemap after the official domain is live.

## Post-Launch Growth Checklist

- Keep Google Business Profile address, phone, hours, menu URL and photos current.
- Publish genuine Instagram updates that point visitors back to `/menu` or `/location`.
- Ask satisfied customers for honest reviews using an approved Google reviews link.
- Add a menu QR code at the counter or on approved printed material.
- Review menu, hours and seasonal content monthly.
- Review Search Console and approved analytics monthly after launch.
