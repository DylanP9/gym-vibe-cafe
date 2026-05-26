# Gym Vibe Café Website

A mobile-first, one-page landing site for Gym Vibe Café in Kinning Park, Glasgow. Built with Next.js, TypeScript and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run lint
npm run build
```

## Project Structure

```text
public/images/
  logo/            Brand logo assets
  menu/            Supplied menu and meal-prep reference artwork
docs/              Project requirements and working documentation
src/app/           App Router page shell, metadata and global styles
src/components/    Reusable page sections and UI elements
src/data/          Business, menu and asset content for simple future edits
src/types/         Reusable TypeScript content types
```

## Editing Content

- Update contact details, opening hours and links in `src/data/businessInfo.ts`.
- Update menu items and price verification status in `src/data/menu.ts`.
- Update media file paths in `src/data/siteAssets.ts`.

The site does not include online ordering, cart, checkout, payments, bookings, accounts or a database.
