# Gym Vibe Café Website

## Project Overview

Gym Vibe Café is a premium, mobile-first local business website for a café in Kinning Park, Glasgow. It helps visitors understand the food offering, browse a readable menu, check opening hours, call the café, open verified directions, follow Instagram and cautiously enquire about current meal-prep availability.

The website is informational only. It deliberately does not process orders, payments, bookings, customer accounts or any administrative function.

## Current Verified Business Information

All published business content should continue to be checked against the supplied approved information below:

| Item | Verified supplied value |
| --- | --- |
| Name | Gym Vibe Café |
| Address | 89 Middlesex St, Kinning Park, Glasgow G41 1EE |
| Phone | 0141 286 0559 |
| Phone link | `tel:+441412860559` |
| Instagram | [@gymvibecafe](https://www.instagram.com/gymvibecafe/) |
| Tagline | Eat Good. Feel Better. Fuel Your Vibe. |
| Price range snapshot | £1–10 |
| Google rating snapshot | 4.9 stars from 121 reviews |
| Breakfast and lunch | Available until 3pm |
| Directions | [Google Maps directions link](https://www.google.com/maps/search/?api=1&query=Gym%20Vibe%20Caf%C3%A9%2089%20Middlesex%20St%20Kinning%20Park%20Glasgow%20G41%201EE) |

### Supplied Opening Hours

| Day | Hours |
| --- | --- |
| Monday | 7:00 am – 4:00 pm |
| Tuesday | 7:00 am – 4:00 pm |
| Wednesday | 7:00 am – 4:00 pm |
| Thursday | 7:00 am – 4:00 pm |
| Friday | 7:00 am – 4:00 pm |
| Saturday | Closed |
| Sunday | 9:00 am – 3:00 pm |

## Public Listing Caution

Public directory listings currently conflict with the supplied project information. Restaurant Guru, Tripadvisor and the older Kafeneio listing at the same address must not be treated as final business truth for this website. Do not change published opening hours, ratings, address or services based only on these listings.

Correcting inaccurate external directory or map listings is a business-owner task outside the website codebase.

## Pages Included

| Route | Purpose |
| --- | --- |
| `/` | Premium homepage with menu preview, reference artwork, meal-prep information, location, FAQs and Instagram CTA |
| `/menu` | App-style in-store menu browser with selectable categories, prices, macros and visit actions |
| `/location` | Verified location, directions, phone details and supplied opening hours |
| `/meal-prep` | Cautious information page directing visitors to confirm current availability with the café |

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

Preview a completed production build:

```bash
npm run start
```

## Site Structure

```text
public/images/
  logo/            Supplied brand logo
  menu/            Supplied menu-board and meal-prep reference artwork
docs/              Original project requirements
src/app/           App Router pages, root metadata and global styling
src/components/    Reusable page sections, navigation and UI components
src/data/          Business facts, menu data, FAQs, assets and SEO/site config
src/types/         Shared TypeScript data types
```

### Editing Content Later

- Update verified contact details, opening hours, Maps URL and Instagram URL in `src/data/businessInfo.ts`.
- Update menu entries, prices and verification markers in `src/data/menu.ts`.
- Update safe FAQ answers in `src/data/faqs.ts`.
- Update media paths and image dimensions in `src/data/siteAssets.ts`.
- Configure the final site domain and Google verification through `src/data/siteConfig.ts` and the environment values described below.
- Keep reusable layouts and visual sections in `src/components/`; keep page files in `src/app/` focused on composition.

### SEO and Domain Configuration

No public website domain has been confirmed, so the site does not hard-code a canonical URL. When the official domain is approved, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-confirmed-domain.example
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-real-google-verification-value
```

Only add the Search Console verification value after it is supplied by the authorised account owner.

## Completed Code Tasks

- Built the Next.js App Router, TypeScript and Tailwind CSS website foundation.
- Centralised verified business information, menu data, FAQs, asset paths and site configuration.
- Reworked the homepage into a premium mobile-first layout with stronger branding, CTAs and high-contrast styling.
- Added accessible mobile navigation and the persistent mobile Call, Directions and Instagram action bar.
- Added supplied logo, menu-board reference artwork and meal-prep reference artwork with fixed dimensions and meaningful labelling.
- Added a concise homepage menu preview fed from the central in-store menu data.
- Added an app-style `/menu` browser with desktop category navigation, mobile tabs, price variants, add-ons and supplied macro displays.
- Added cautious meal-prep information without ordering, payment or availability promises.
- Added a Find Us panel based solely on supplied address, phone, Instagram and Maps details.
- Added structured spaces for future genuine gallery photography without inserting fake images.
- Added safe FAQ content using supplied information only.
- Added `/menu`, `/location` and `/meal-prep` routes.
- Added per-page metadata support with optional canonical and Search Console configuration.
- Improved LocalBusiness JSON-LD without adding review/rating structured data.
- Added skip navigation, visible focus states, semantic page structure and accessible expandable mobile navigation.
- Added an Instagram CTA without scripts or a live embed.
- Organised supplied artwork under `public/images/`.

## Menu Data Maintenance

The website-readable menu lives in `src/data/menu.ts`, with its shared data model in `src/types/menu.ts`. It is the single source used by both the homepage highlights and the full `/menu` browser.

- To update a price, edit the relevant item's `price`, `secondaryPrice` or size `options` entry in `src/data/menu.ts`.
- To add a category, add a `MenuCategory` object with a unique `id`, title and items to `menuCategories`.
- To add macro information, provide `calories`, `proteinGrams`, `carbsGrams` and `fatGrams` in an item's `macros` value only when verified.
- To highlight an item, set `isPopular: true`.
- To identify a vegetarian choice, set `isVegetarian: true`.
- To show an unavailable item, set `isUnavailable: true` only after confirmation.
- To flag a detail requiring confirmation, set `needsVerification: true`.
- Build-your-own options, drinks variants and extras are informational displays only; they do not create online customisation or ordering.
- Current website prices are based on supplied in-store menu-board information. Delivery-platform prices may differ and must not be copied into the in-store menu without confirmation.

Before launch, confirm all prices, smoothie prices, coffee prices, published high-protein macros and whether any items are currently unavailable. Approved delivery or collection links can be supplied later only if those external actions are wanted.

## Remaining Code Tasks

- Set `NEXT_PUBLIC_SITE_URL` once the official production domain is approved.
- Finalise canonical URLs only after the real domain is configured.
- Add `sitemap.ts` and `robots.ts` once the real public domain is known.
- Add the real Google Search Console verification value once supplied.
- Choose an analytics provider and implement tracking only after the consent approach is decided.
- Track call, directions, Instagram, menu-view and any future approved external-order link clicks only after analytics approval.
- Replace gallery-ready cards with approved genuine food, drinks, interior and exterior photography.
- Create a branded social preview image after approved visual assets are available.
- Replace or verify the current logo-based favicon setup with approved favicon files.
- Verify page metadata, canonical URLs and social sharing output in production.
- Add external collection or delivery links only if approved real links are supplied.
- Consider expanded breadcrumb structured data only if additional real content pages are created.
- Add automated tests if the site expands beyond the current static content scope.
- Re-run production build checks before deployment.
- Complete mobile device QA on real phones.
- Complete keyboard and screen-reader accessibility QA.
- Complete performance and image-quality QA after final imagery is supplied.

## Remaining Business / Owner Tasks

- Confirm the current opening hours before launch.
- Confirm all full menu items and prices before launch.
- Confirm smoothie and coffee prices against current in-store information.
- Confirm the supplied high-protein macro information can be published.
- Confirm whether any menu items are currently unavailable.
- Confirm current meal-prep availability, choices, prices and collection details.
- Confirm whether any calories or macros may be published from an authoritative source.
- Supply a high-resolution approved logo, preferably SVG or transparent PNG.
- Supply genuine approved food photography.
- Supply an approved café interior photograph.
- Supply an approved café exterior photograph.
- Supply a higher-resolution menu-board source image or verified menu document.
- Supply a higher-resolution meal-prep artwork source if it should remain prominent.
- Confirm the official website domain.
- Provide Google Search Console access or the genuine verification value.
- Supply the official Google Business Profile link.
- Supply an approved Google reviews link if a reviews CTA is wanted.
- Supply approved external collection or delivery links if those actions are wanted later.
- Correct conflicting external directory listings outside this website.
- Approve final website wording before publication.
- Confirm permissions for every photograph or brand asset used.

## Out Of Scope

- Payments
- Checkout
- Cart or basket
- Direct online ordering
- Booking
- Customer accounts
- Admin dashboard
- Database
- Live Instagram feed
- Live Google reviews feed
- Review scraping
- Delivery API integration

## Launch Checklist

- Run `npm run lint` and `npm run build`.
- Test the site on mobile screen sizes and real mobile devices.
- Test every navigation and CTA link.
- Test the telephone link on a phone.
- Test the verified Google Maps directions link.
- Test the verified Instagram link.
- Confirm opening hours immediately before launch.
- Confirm menu items, prices and availability notes.
- Confirm the displayed address and phone number.
- Verify metadata in the production deployment.
- Verify approved favicon files.
- Validate LocalBusiness structured data.
- Confirm there are no fake order, payment, booking or review features.
- Confirm there are no broken links.
- Verify the production deployment and official domain.
- Submit a sitemap only after the real domain is live.
- Add Google Search Console only after the real domain is live.
- Connect analytics only after an approved consent approach is chosen.

## Future Enhancements

- Replace gallery slots with a real café and food gallery.
- Add approved external ordering or collection links if supplied.
- Expand menu presentation when a fully verified source menu is supplied.
- Add a blog or news page only if the café wants to maintain it.
- Add seasonal offers only when supplied and approved.
- Perform periodic Google Business Profile and directory consistency checks.
- Add monthly reporting for approved CTA click tracking.
