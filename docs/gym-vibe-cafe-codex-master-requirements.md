# Gym Vibe Café Website Improvement Requirements for Codex

## 1. Purpose

Build a polished, mobile-first, one-page landing website for **Gym Vibe Café**.

The website must help customers quickly:

- Understand what Gym Vibe Café offers
- View the menu easily
- Check opening hours
- Get directions
- Call the café
- Follow Instagram
- Trust the business before visiting
- Click external order/delivery links only if real links are supplied later

The website must **not** process payments, take orders directly, manage bookings, run a checkout, collect card details, create customer accounts, or use a backend/database for this version.

Ordering and payment are handled separately outside the website.

---

## 2. Business Information

Use these business details throughout the website.

```text
Business name: Gym Vibe Café
Business type: Café
Address: 89 Middlesex St, Kinning Park, Glasgow G41 1EE
Phone: 0141 286 0559
Phone link: tel:+441412860559
Instagram: https://www.instagram.com/gymvibecafe/
Instagram handle: @gymvibecafe
Google rating snapshot: 4.9 stars from 121 reviews
Price range snapshot: £1–10
Location: Kinning Park, Glasgow Southside
Tagline: Eat Good. Feel Better. Fuel Your Vibe.
```

Google Maps directions link:

```text
https://www.google.com/maps/search/?api=1&query=Gym%20Vibe%20Caf%C3%A9%2089%20Middlesex%20St%20Kinning%20Park%20Glasgow%20G41%201EE
```

Rules:

- Do not invent missing links.
- Do not create fake ordering buttons.
- Do not claim online ordering is available unless a real order link is supplied.
- Do not claim live open/closed status unless coded properly.
- Do not show fake reviews.
- Do not show fake food photos.
- Do not make unsupported health claims.

---

## 3. Opening Hours

Display opening hours clearly in the quick info strip, opening hours section, footer, and structured data.

```text
Monday: 7:00 am – 4:00 pm
Tuesday: 7:00 am – 4:00 pm
Wednesday: 7:00 am – 4:00 pm
Thursday: 7:00 am – 4:00 pm
Friday: 7:00 am – 4:00 pm
Saturday: Closed
Sunday: 9:00 am – 3:00 pm
```

Additional note:

```text
Breakfast & lunch available until 3pm.
Hours may vary on holidays.
```

Requirements:

- Show Saturday clearly as closed.
- Show Sunday as 9am–3pm.
- Do not display “Open now” unless open/closed logic is accurately implemented.
- If today's day is highlighted, calculate it from the user's local browser date.
- Do not manually fake today's opening state.

---

## 4. Website Goal

The website is a **conversion-focused local landing page**, not an ordering platform.

Primary actions:

```text
Call the café
Get directions
View the menu
Follow Instagram
Click external collection/delivery link if supplied later
```

The page should answer these customer questions within seconds:

```text
What is this place?
What food do they do?
Where is it?
Are they open?
How do I get there?
How do I call them?
Can I see their Instagram?
```

---

## 5. Target Audience

Build for:

```text
Local gym-goers
Lifters
Fighters
Students
Office workers
Tradespeople
Local residents
Breakfast customers
Lunch customers
Meal-prep customers
People searching for Glasgow Southside cafés
People searching for high-protein meals in Glasgow
People searching for smoothies and coffee near Kinning Park
```

The design must work especially well for mobile users who may be walking nearby, checking the menu quickly, checking hours, calling, or opening directions.

---

## 6. Brand Positioning

Position Gym Vibe Café as:

```text
A Glasgow café for classic comfort food, high-protein meals, smoothies, coffee, and good energy.
```

Main message:

```text
Classic café food and high-protein meals in one place.
```

Supporting message:

```text
From Scottish breakfasts and filled rolls to protein pancakes, smoothies, and nutritional mains, Gym Vibe Café serves fresh food designed to keep you fuelled.
```

Tone:

```text
Confident
Local
Friendly
Fitness-inspired
Clear
Energetic
Not overly corporate
Not childish
Not generic
```

Avoid:

```text
Overly formal copy
Generic coffee-shop clichés
Unsupported fitness or medical claims
Fake urgency
Fake live information
Complex wording
```

---

## 7. Visual Design Direction

The site should be inspired by the existing Gym Vibe Café menu board.

Core style:

```text
Dark background
Deep red accents
White/off-white text
High contrast
Bold section headers
Menu-board inspired cards
Fitness café energy
Clean mobile-first layout
Modern but still local and authentic
```

Suggested colours:

```text
Page background: near black / charcoal
Card background: very dark grey / black
Primary accent: deep red / burgundy
Primary text: white / off-white
Secondary text: muted grey
Optional highlight: subtle green for nutrition/protein highlights
Borders: dark red, muted grey, or translucent white
```

Do not:

- Use pale pastel coffee-shop styling.
- Make the page look like a generic bakery site.
- Use tiny menu-board text.
- Put important information only inside images.
- Use heavy animations that slow mobile loading.
- Use low-contrast grey text on black.

---

## 8. Technical Scope

Allowed in this version:

```text
Landing page
Menu display
Opening hours display
Location card
Directions link
Phone link
Instagram link
External ordering links if supplied
SEO metadata
LocalBusiness structured data
Simple click tracking if already available
Responsive design
```

Not allowed in this version:

```text
Payment processing
Checkout
Basket/cart
Direct food ordering system
Booking system
Customer accounts
Admin login
Database
CMS
Live Google reviews feed
Review scraping
Delivery integration API
Newsletter signup unless requested
Loyalty system
```

---

## 9. Recommended Stack

Use the existing stack if the project already exists.

If starting fresh, use:

```text
Next.js
TypeScript
Tailwind CSS
Static data files
No backend
```

Deployment assumption:

```text
Vercel or similar static-friendly hosting
```

The website should run as a mostly static site.

---

## 10. Recommended File Structure

If using Next.js:

```text
src/
  app/
    layout.tsx
    page.tsx
  components/
    Header.tsx
    HeroSection.tsx
    QuickInfoStrip.tsx
    AboutSection.tsx
    PopularPicksSection.tsx
    MenuCategoryCard.tsx
    FullMenuSection.tsx
    OpeningHoursSection.tsx
    LocationSection.tsx
    TrustSection.tsx
    InstagramSection.tsx
    ContactSection.tsx
    StickyMobileActionBar.tsx
    Footer.tsx
  data/
    businessInfo.ts
    menu.ts
    siteLinks.ts
  types/
    business.ts
    menu.ts
  assets/
    images/
      README.md
```

Rules:

- Keep `page.tsx` clean.
- Move sections into components.
- Keep business details in a data file.
- Keep menu data in a data file.
- Do not duplicate phone/address/hours in multiple components.
- Use reusable components for repeated cards and CTAs.

---

## 11. Business Data Requirements

Create a central business data source.

Suggested shape:

```text
BusinessInfo
  name
  tagline
  description
  address
    line1
    area
    city
    postcode
    full
  phone
    display
    href
  instagram
    handle
    url
  maps
    directionsUrl
  hours
    monday
    tuesday
    wednesday
    thursday
    friday
    saturday
    sunday
  ratingSnapshot
    rating
    reviewCount
    source
  priceRange
```

Required values:

```text
Phone display: 0141 286 0559
Phone href: tel:+441412860559
Instagram: https://www.instagram.com/gymvibecafe/
Address: 89 Middlesex St, Kinning Park, Glasgow G41 1EE
```

---

## 12. Menu Data Requirements

Create a central menu data file.

Suggested shape:

```text
MenuCategory
  id
  title
  subtitle optional
  availabilityNote optional
  items
    id
    name
    description optional
    price optional
    priceNote optional
    tags optional
    needsVerification optional
```

Tags can include:

```text
popular
high-protein
breakfast
lunch
smoothie
traditional
kids
vegetarian
verify-price
```

Rules:

- Store menu items in `data/menu.ts` or equivalent.
- Display menu from data rather than hard-coding it in components.
- Use `needsVerification` for unclear prices or unclear text from the image.
- Do not display guessed nutrition/macros.
- Do not claim vegetarian, vegan, gluten-free, or allergen-safe unless verified.
- Do not add allergy information unless supplied by the business.

---

## 13. Menu Categories

Use these customer-friendly menu categories:

```text
Popular Picks
Traditional Breakfast & Lunch
Kids Meals
Appetizers
Traditional Mains
Build Your Own
Nutritional Breakfast & Lunch
Nutritional Mains
Fresh Frozen Fruit Smoothies
Extras
```

Mobile UX:

- The menu must not feel overwhelming.
- Use stacked cards, accordions, or category jump links.
- Do not use the menu image as the only menu.
- Users must not need to pinch-zoom to read the menu.

---

## 14. Popular Picks Section

Create a section near the top called one of:

```text
Popular Picks
Customer Favourites
Fuel Favourites
Menu Highlights
```

Show 6–8 high-converting items:

```text
Full Scottish Breakfast
Hot Filled Rolls
High Protein Pancakes with Mixed Fruit
Creamy Cajun Chicken Pasta
Lemon Pepper Chicken Rice Bowl
Fresh Frozen Fruit Smoothies
Loaded Fries
```

Requirements:

- Use cards.
- Include prices where known.
- Use short descriptions where helpful.
- Add a CTA below: View full menu.
- Use this section to sell the food visually.

Suggested descriptions:

```text
Full Scottish Breakfast: A proper café breakfast to start the day.
High Protein Pancakes: A sweeter high-protein option with mixed fruit.
Creamy Cajun Chicken Pasta: A filling nutritional main with bold flavour.
Lemon Pepper Chicken Rice Bowl: Fresh, simple and protein-focused.
Fresh Frozen Fruit Smoothies: Cold fruit smoothies with optional protein and chia seeds.
Loaded Fries: Chicken or mince loaded fries for a proper comfort-food hit.
```

---

## 15. Full Menu Content

Use the following menu content. Verify unclear values before launch.

### Traditional Breakfast & Lunch

Availability:

```text
Available until 3pm
```

Items:

```text
Hot Filled Rolls: £2.85 / double £3.75
Full Scottish Breakfast: £6.95 / XL £10.95
Vegetarian Breakfast: £6.95
French Toast with Topping: £4.50
Eggs on Toast: £4.50
```

### Kids Meals

Note:

```text
All kids meals served with a side and drink
```

Items:

```text
Macaroni Cheese: £4.95
Pizza: £4.95
Popcorn Chicken: £4.95
Fish Fingers: £4.95
```

### Appetizers

Items:

```text
Homemade Soup: £2.45 / large £2.95
Halloumi Fries & Chilli Jam: £4.50
Onion Rings: £3.50
100% Chicken Bites: £4.95
Popcorn Chicken: £4.95
Fries / Seasoned Fries: £2.95 / £3.95
Nachos / Loaded Nachos: £4.95 / £6.95
```

### Traditional Mains

Items:

```text
Steak Mince & Tatties: £6.95
Fish & Chips: £6.50
Macaroni Cheese & Chips: verify price from original menu
Scotch Pie, Chips & Beans: £5.45
Breast of Chicken Curry & Rice: £6.95
Hotdog with Toppings: £4.65
Handmade Beef Burger + Chips: £6.50
Chicken Burger + Chips: £5.95
Chilli Con Carne + Rice: £6.95
```

### Build Your Own

Availability:

```text
Available until 3pm
```

Bread/item types:

```text
Cold Filled Roll
Sandwich
Toastie
Panini
12-inch Sub Roll
Wrap
Baked Potato
Pasta & Salad Box
```

Fillings:

```text
Coronation Chicken
Mexican Chicken
Smoked Chilli Ham
Chicken Tikka
Chicken Mayo
Baked Beans
Cheese Savoury
Sweetcorn
Coleslaw
Egg
Tuna Mayo
Turkey
```

Salad options:

```text
Lettuce
Tomato
Cucumber
Onion
Red Onion
Pepper
Jalapeno
Branston Pickle
```

Dressings:

```text
Balsamic Vinegar
Caesar
Southwest Sauce
Sweet Chilli
Sriracha Sauce
Spicy Mayo
Pesto
Avocado Lime
Ranch
```

Requirements:

- Present this as a simple list of options, not an interactive order builder.
- Do not allow customisation checkout.
- Do not present it as online ordering.
- Add a note: Ask in-store for current build-your-own options and prices.

### Nutritional Breakfast & Lunch

Availability:

```text
Available until 3pm
```

Items:

```text
Eggs Benedict: £6.95
Eggs Florentine: £5.95
Avocado, Salmon & Egg: £8.95
Protein Packed Overnight Oats: £4.45
High Protein Vitality Bowl: £5.95
Homemade Chicken Sausage with Toast & Eggs: £5.95
High Protein Pancakes with Mixed Fruit: £5.45
```

### Nutritional Mains

Items:

```text
Honey Garlic Butter Chicken Mac & Cheese: £6.95
Crispy Salt & Pepper Chicken & Chips: £6.95
Creamy Chipotle Steak & Potatoes: £7.95
Lemon Pepper Chicken Rice Bowl: £6.95
Creamy Garlic Herb Cajun Chicken & Mash: £6.95
Creamy Cajun Chicken Pasta: £6.95
Creamy Garlic Shrimp Linguine: £6.95
Creamy Spicy Salmon Ramen Noodles: £7.95
```

Important:

```text
The menu image appears to include calorie and macro information.
Do not display calories or macros unless verified from a clear original source.
Do not guess nutritional values.
```

### Fresh Frozen Fruit Smoothies

Items:

```text
Green Reviver
Acai Kick
Blue Blast
Super Green
Passion Storm
Ginger Beats
```

Pricing:

```text
All smoothies: £3.95
Add protein & chia seeds: £1.50
```

### Extras

Items:

```text
Succulent Chicken Strips: £5.95
Mixed Greens with Garlic and Pepper: £3.95
Sweet Potato Fries: £3.95
Loaded Fries, Chicken or Mince: £6.45
```

---

## 16. Required Page Sections in Order

The landing page must follow this structure:

```text
1. Header
2. Hero section
3. Quick info strip
4. Popular picks / menu highlights
5. About / positioning section
6. Full menu section
7. High-protein feature section
8. Smoothies feature section
9. Trust section
10. Opening hours section
11. Location and directions section
12. Instagram section
13. Contact call-to-action section
14. Footer
15. Sticky mobile action bar
```

The first screen must prioritise:

```text
What the café is
Where it is
View menu
Call
Directions
```

---

## 17. Header Requirements

Header content:

```text
Gym Vibe Café
Menu
Hours
Location
Contact
Call now
Instagram
```

Desktop:

- Logo/name on the left.
- Navigation links in the centre or right.
- Primary CTA button on the right.
- Instagram link visible.
- Header can be sticky if it does not harm the design.

Mobile:

- Logo/name visible.
- Do not overcrowd the header.
- Use compact nav or a menu button.
- Call and directions must still be accessible through the sticky mobile action bar.
- Header must not overflow on small screens.

Behaviour:

```text
Menu link scrolls to menu section.
Hours link scrolls to hours section.
Location link scrolls to location section.
Contact link scrolls to contact section.
Call button uses tel:+441412860559.
Instagram opens the Instagram URL.
```

---

## 18. Hero Section Requirements

Headline:

```text
Real food. Good energy. Fuel your vibe.
```

Alternative headline:

```text
Classic café food and high-protein fuel in Glasgow.
```

Subheading:

```text
Scottish breakfasts, filled rolls, high-protein meals, smoothies and coffee in Kinning Park, Glasgow.
```

Supporting line:

```text
Eat Good. Feel Better. Fuel Your Vibe.
```

Hero CTAs:

```text
View menu
Get directions
Call now
```

Hero trust snippets:

```text
Kinning Park, Glasgow
Breakfast & lunch available until 3pm
4.9-star Google rating snapshot
```

Requirements:

- Clear within the first screen.
- Do not hide text over a busy image.
- Include at least two strong CTAs.
- Include location context.
- Work well on mobile.
- Include the brand tagline.

Hero image recommendation:

- Use a strong food or café interior image.
- If no high-quality image is available, use a dark graphic/card layout instead of a poor-quality photo.

---

## 19. Quick Info Strip Requirements

Place below the hero.

Content:

```text
Kinning Park, Glasgow
Mon–Fri 7am–4pm
Sunday 9am–3pm
Saturday closed
Breakfast & lunch until 3pm
Call 0141 286 0559
```

Design:

- Use compact cards or badges.
- Keep it readable on mobile.
- Use this section to reduce customer friction.

Acceptance criteria:

- Customer can see location, hours and call information without scrolling far.
- Strip stacks cleanly on mobile.
- No text overflows.

---

## 20. About Section Requirements

Content basis:

```text
Gym Vibe Café is Glasgow’s spot for real fuel and good energy. Located minutes from the city centre in the Southside, the café serves everything from classic Scottish breakfasts to modern high-protein meals made fresh every day.

Whether you are a lifter, fighter, student, worker, or just someone who loves good food, Gym Vibe Café brings together taste and nutrition in one place.
```

Shorter version:

```text
Built for good food and good energy, Gym Vibe Café brings together proper café favourites and high-protein meals in Kinning Park. Drop in for breakfast, lunch, coffee, smoothies, or meal prep pickups.
```

Requirements:

- Mention Glasgow Southside / Kinning Park.
- Mention traditional and nutritional options.
- Mention breakfast, lunch, coffee, smoothies and meal prep pickups.
- Keep paragraphs short.
- Do not overpromise health or fitness results.

---

## 21. Full Menu Section Requirements

Requirements:

- Use category cards.
- Use red category headers inspired by the menu board.
- Show item names clearly.
- Show prices where known.
- Show availability notes.
- Include a customer-facing note: Prices and availability may vary.
- Make mobile reading comfortable.

Do not:

- Use the menu image as the only menu.
- Make users pinch zoom to read the menu.
- Build checkout/cart behaviour.
- Add quantity selectors.
- Add basket buttons.

Optional UX improvement:

```text
Add category jump buttons: Breakfast, Mains, Protein, Smoothies, Extras.
```

---

## 22. High-Protein Feature Section

Suggested heading:

```text
High-protein meals without boring food.
```

Suggested copy:

```text
From protein pancakes and overnight oats to chicken pasta, rice bowls and nutritional mains, Gym Vibe Café serves filling options for training days, work days and everything in between.
```

Featured items:

```text
High Protein Pancakes with Mixed Fruit
Protein Packed Overnight Oats
Lemon Pepper Chicken Rice Bowl
Creamy Cajun Chicken Pasta
Creamy Garlic Herb Cajun Chicken & Mash
```

Rules:

- Do not claim exact protein/calorie/macros unless verified.
- Do not make medical claims.
- Use “high-protein” only for items clearly positioned that way on the menu.

---

## 23. Smoothies Feature Section

Suggested heading:

```text
Fresh frozen fruit smoothies.
```

Suggested copy:

```text
Choose from fruit-packed smoothie options, with protein and chia seeds available as an add-on.
```

Smoothie names:

```text
Green Reviver
Acai Kick
Blue Blast
Super Green
Passion Storm
Ginger Beats
```

Requirements:

- Show all smoothies.
- Show price: £3.95.
- Show add-on: Add protein & chia seeds £1.50.
- Use visual styling that feels fresh but still matches the dark/red brand.

---

## 24. Trust Section Requirements

Content:

```text
4.9-star Google rating snapshot
121 Google reviews snapshot
Located in Kinning Park, Glasgow
Breakfast, brunch, coffee, smoothies and meal prep pickups
Classic favourites and high-protein options
```

Important wording:

```text
Google rating snapshot. Check Google for the latest reviews.
```

Requirements:

- Do not fake individual reviews.
- Do not scrape reviews.
- Do not imply the rating is live unless manually maintained or connected properly.
- If a Google reviews link is supplied later, add a “Read Google reviews” button.

---

## 25. Opening Hours Section Requirements

Section content:

```text
Opening Hours
Monday: 7:00 am – 4:00 pm
Tuesday: 7:00 am – 4:00 pm
Wednesday: 7:00 am – 4:00 pm
Thursday: 7:00 am – 4:00 pm
Friday: 7:00 am – 4:00 pm
Saturday: Closed
Sunday: 9:00 am – 3:00 pm
```

Add:

```text
Breakfast & lunch available until 3pm.
Hours may vary on holidays.
```

Optional:

```text
Highlight today's row.
```

Rules:

- If current open/closed status is implemented, it must respect Saturday closure and Sunday reduced hours.
- If open/closed logic is not implemented, do not show “Open now” or “Closed now”.

---

## 26. Location Section Requirements

Content:

```text
Gym Vibe Café
89 Middlesex St
Kinning Park
Glasgow
G41 1EE
```

CTA buttons:

```text
Get directions
Call café
Open Instagram
```

Requirements:

- Use the provided Google Maps search link.
- Make the address easy to read and copy.
- Embed a map only if simple and not heavy.
- Recommended default: use a polished location card with a directions button instead of a heavy embedded map.

---

## 27. Instagram Section Requirements

Content:

```text
Follow @GymVibeCafe for updates, giveaways and new menu drops.
```

CTA:

```text
Follow on Instagram
```

Requirements:

- Link to https://www.instagram.com/gymvibecafe/.
- Open in a new tab.
- Use clear accessible link text.
- Do not embed Instagram posts unless requested later.
- Do not rely on third-party scripts for MVP.

---

## 28. Contact Call-to-Action Section

Suggested heading:

```text
Ready to fuel your day?
```

Suggested copy:

```text
Visit Gym Vibe Café in Kinning Park, call ahead, or follow us on Instagram for the latest updates and menu drops.
```

Buttons:

```text
Call now
Get directions
Follow Instagram
```

Requirements:

- This section should appear before the footer.
- Buttons must be large and mobile-friendly.
- No fake order links.

---

## 29. Sticky Mobile Action Bar

Add a sticky bottom action bar on mobile only.

Actions:

```text
Call
Directions
Instagram
```

Optional fourth action if real link supplied:

```text
Order
```

Requirements:

- Only show on mobile and small tablets.
- Fixed at bottom.
- Buttons large enough to tap.
- Add bottom padding to page content so it does not cover footer.
- Use short labels.
- Use accessible text.
- Do not include too many buttons.

Acceptance criteria:

- On mobile, customers can call or get directions from anywhere.
- The sticky bar does not cover content.
- The sticky bar does not overlap browser UI awkwardly.

---

## 30. Footer Requirements

Footer content:

```text
Gym Vibe Café
Eat Good. Feel Better. Fuel Your Vibe.
89 Middlesex St, Kinning Park, Glasgow G41 1EE
0141 286 0559
@gymvibecafe
Mon–Fri 7am–4pm, Sunday 9am–3pm, Saturday closed
© current year Gym Vibe Café. All rights reserved.
```

Footer links:

```text
Menu
Hours
Location
Contact
Instagram
Directions
Call
```

Requirements:

- Keep it clean.
- Repeat contact information clearly.
- Use current year dynamically if easy.

---

## 31. SEO Requirements

Page title:

```text
Gym Vibe Café Glasgow | High-Protein Meals, Breakfast & Smoothies
```

Meta description:

```text
Gym Vibe Café in Kinning Park, Glasgow serves classic Scottish breakfasts, high-protein meals, smoothies, coffee, brunch and meal prep pickups.
```

Open Graph title:

```text
Gym Vibe Café Glasgow
```

Open Graph description:

```text
Classic café favourites, high-protein meals, smoothies and coffee in Kinning Park, Glasgow.
```

Suggested SEO phrases to naturally include:

```text
Gym Vibe Café
Gym Vibe Cafe Glasgow
Kinning Park café
Glasgow Southside café
High-protein meals Glasgow
Scottish breakfast Glasgow
Breakfast Glasgow Southside
Smoothies Glasgow
Coffee shop Kinning Park
Meal prep pickups Glasgow
```

Requirements:

- Use only one H1.
- Use clear H2 section headings.
- Use semantic sections.
- Add descriptive page metadata.
- Add LocalBusiness structured data if practical.
- Do not keyword-stuff.
- Do not hide keywords.
- Do not write unnatural SEO copy.

---

## 32. LocalBusiness Structured Data Requirements

Add JSON-LD structured data if the framework supports it cleanly.

Use a local business / food establishment type.

Data should include:

```text
Business name
Address
Phone number
Opening hours
URL if known
Instagram sameAs link
Price range
Business type
```

Opening hours values:

```text
Mo-Fr 07:00-16:00
Sa closed
Su 09:00-15:00
```

Rules:

- Only include accurate business information.
- Do not include fake reviews in structured data.
- Do not mark up the 4.9-star rating as structured aggregateRating unless it is displayed accurately, sourced properly and maintained.
- If unsure, omit aggregateRating from JSON-LD.

---

## 33. Accessibility Requirements

Requirements:

- Use semantic HTML.
- Use one H1.
- Use logical heading order.
- Links must describe their action.
- Buttons must have clear labels.
- Image alt text must be meaningful.
- Do not use text only inside images for critical information.
- Ensure colour contrast is readable.
- Ensure focus states are visible.
- Ensure tap targets are large enough.
- Ensure sticky mobile bar is keyboard accessible.
- Do not trap focus.
- Do not autoplay audio or video.

Minimum tap target guidance:

```text
Aim for at least 44px by 44px for interactive controls.
Prefer around 48px by 48px on mobile when practical.
Leave enough spacing between adjacent buttons.
```

---

## 34. Performance Requirements

Requirements:

- Optimise images before upload.
- Use modern image formats where practical.
- Use responsive image sizes.
- Do not load huge menu images by default.
- Avoid unnecessary third-party scripts.
- Avoid heavy animation libraries.
- Avoid embedding Instagram scripts in MVP.
- Avoid embedding heavy maps if a directions link is enough.
- Lazy-load lower-page images if applicable.
- Keep CSS simple and maintainable.

Target feel:

```text
The site should feel instant enough for someone checking the menu, address or phone number quickly.
```

---

## 35. Analytics and Value Tracking Requirements

Analytics are optional but recommended for proving the value of the monthly website plan.

Track these events if analytics is available:

```text
Call button clicked
Directions button clicked
Instagram link clicked
Menu section viewed
External order collection clicked if supplied
External order delivery clicked if supplied
```

Rules:

- Do not collect personal information unnecessarily.
- Do not add complex tracking for MVP.
- If using analytics tools that require cookie consent, handle consent properly before launch.
- If unsure, use simple privacy-friendly analytics or skip analytics for v1.

Client reporting idea:

```text
Monthly care report can mention how many visitors clicked call, directions, menu, Instagram or order links.
```

---

## 36. External Ordering Link Rules

The website must not process orders or payments.

Allowed:

```text
Button linking to existing third-party collection page
Button linking to existing third-party delivery page
Button linking to Instagram if orders are handled by DM
Button saying “Call to order” using phone link
```

Not allowed:

```text
Cart
Checkout
Card form
Apple Pay / Google Pay button
Order database
Order confirmation emails
Payment integration
Fake order buttons
```

If ordering links are supplied later, add them in the business data file:

```text
orderLinks
  collectionUrl optional
  deliveryUrl optional
  label
  enabled
```

If no links are supplied, do not show order buttons.

---

## 37. Required Photos and Visual Assets

Minimum required files:

```text
1. Logo file
2. Hero food or café image
3. Exterior photo of the café
4. Interior/counter photo
5. Menu board image for reference
6. At least 4 food photos
7. At least 1 smoothie/drink photo
8. Instagram/profile image or brand mark if available
9. Favicon/icon
10. Business details text file
11. Final verified menu text/prices file
```

Recommended formats:

```text
Photos: JPG or WebP
Logo: SVG preferred, PNG acceptable
Favicon: SVG, PNG or ICO
Menu reference: PNG, JPG or PDF
Business info: TXT, Markdown, Google Doc or Word doc
Menu data: TXT, Markdown, CSV or spreadsheet
```

---

## 38. Photo Shot List

### Hero Photo

Purpose:

```text
Main first-screen visual.
```

Best options:

```text
A table spread with breakfast, coffee and a high-protein meal
A close-up of a popular dish with café branding in background
A strong interior shot with food in foreground
```

Requirements:

- Landscape orientation preferred.
- Minimum 1600px wide.
- No blurry images.
- No messy background.
- Good lighting.
- Food should look fresh.
- Do not use low-quality Instagram screenshots.

Recommended filename:

```text
hero-gym-vibe-cafe-food-spread.jpg
```

### Exterior Photo

Purpose:

```text
Help customers recognise the café before visiting.
```

Requirements:

- Show the front of the café clearly.
- Include signage if possible.
- Take during daylight.
- Avoid cars blocking the entrance if possible.

Recommended filename:

```text
gym-vibe-cafe-exterior-middlesex-street.jpg
```

### Interior Photo

Purpose:

```text
Show atmosphere and make the café feel real and trustworthy.
```

Requirements:

- Show counter, seating, menu board or general vibe.
- Avoid showing customers clearly unless permission is given.
- Keep it clean and welcoming.

Recommended filename:

```text
gym-vibe-cafe-interior-counter.jpg
```

### Food Photos

Capture at least 4 dishes.

Priority dishes:

```text
Full Scottish Breakfast
High Protein Pancakes with Mixed Fruit
Creamy Cajun Chicken Pasta
Lemon Pepper Chicken Rice Bowl
Loaded Fries
Hot Filled Rolls
```

Requirements:

- Shoot close-up and slightly angled.
- Use natural light if possible.
- Keep backgrounds simple.
- Take both landscape and portrait versions if possible.
- Avoid harsh flash.
- Make sure plates and tables are clean.

Recommended filenames:

```text
full-scottish-breakfast-gym-vibe-cafe.jpg
high-protein-pancakes-mixed-fruit.jpg
creamy-cajun-chicken-pasta.jpg
lemon-pepper-chicken-rice-bowl.jpg
loaded-fries-chicken-mince.jpg
hot-filled-rolls-gym-vibe-cafe.jpg
```

### Smoothie Photos

Capture at least one smoothie photo, ideally 2–3.

Options:

```text
Green smoothie
Berry smoothie
Smoothie lineup
Smoothie with protein/chia add-on
```

Recommended filenames:

```text
fresh-fruit-smoothies-gym-vibe-cafe.jpg
super-green-smoothie.jpg
blue-blast-smoothie.jpg
```

### Menu Board Photo

Purpose:

```text
Reference only or optional downloadable/zoomable menu image.
```

Requirements:

- Take straight-on.
- Use high resolution.
- Avoid glare.
- Make text readable.
- Use this to verify prices and menu details.
- Do not rely on it as the only menu display.

Recommended filename:

```text
gym-vibe-cafe-menu-board-reference.jpg
```

### Staff / Team Photo Optional

Purpose:

```text
Add personality and local trust.
```

Requirements:

- Only use if staff agree.
- Avoid forced corporate-style photos.
- Keep it natural and friendly.

Recommended filename:

```text
gym-vibe-cafe-team.jpg
```

---

## 39. Image Preparation Requirements

Before adding photos:

```text
Crop hero photos to landscape.
Crop food cards to consistent ratios.
Compress images.
Rename files descriptively.
Remove duplicate or poor-quality images.
Do not upload huge original phone images directly if they are several MB each.
```

Recommended sizes:

```text
Hero image: around 1600px wide
Card images: around 800px wide
Thumbnail images: around 400px wide
Logo: SVG or transparent PNG
Favicon: 32x32 and 180x180 variants if possible
```

Naming style:

```text
lowercase-words-separated-by-hyphens.jpg
```

Alt text examples:

```text
Full Scottish breakfast at Gym Vibe Café in Glasgow
High protein pancakes with mixed fruit at Gym Vibe Café
Exterior of Gym Vibe Café on Middlesex Street in Kinning Park
Fresh frozen fruit smoothie at Gym Vibe Café
```

---

## 40. Required Non-Photo Files

Ask the business for:

### Logo

Preferred:

```text
SVG logo
```

Acceptable:

```text
Transparent PNG logo
High-resolution JPG if nothing else exists
```

Needed versions:

```text
Light logo for dark background
Square logo/icon for favicon/social preview
Transparent version if possible
```

### Verified Menu

Needed because the current menu image is not fully readable.

Accepted formats:

```text
PDF
Word document
Google Doc
Spreadsheet
Plain text
Clear high-resolution menu photo
```

Must verify:

```text
All prices
All item names
Nutritional mains calories/macros if they want those shown
Allergen notes if they want allergens shown
Availability times
Current smoothie names and prices
```

### Business Links

Ask for:

```text
Current Instagram link
Google Business Profile link
Google reviews link if they want a reviews button
Order collection link if available
Order delivery link if available
Facebook link if available
TikTok link if available
```

Rules:

- Only add links that are supplied and working.
- Do not invent platform links.

### Brand Assets

Ask for:

```text
Brand colours if known
Fonts if known
Menu design source file if available
Any existing brand guidelines
Any slogans or approved wording
```

### Legal / Practical Details

Ask for:

```text
Business owner approval for content
Permission to use photos
Confirmation of opening hours
Confirmation of address and phone number
Confirmation of menu prices
Confirmation of whether prices include VAT if relevant
```

---

## 41. Asset Folder Structure

Suggested:

```text
public/
  images/
    logo/
      gym-vibe-cafe-logo.svg
      gym-vibe-cafe-logo-white.png
      gym-vibe-cafe-icon.png
    food/
      full-scottish-breakfast-gym-vibe-cafe.jpg
      high-protein-pancakes-mixed-fruit.jpg
      creamy-cajun-chicken-pasta.jpg
      lemon-pepper-chicken-rice-bowl.jpg
      loaded-fries-chicken-mince.jpg
    drinks/
      fresh-fruit-smoothies-gym-vibe-cafe.jpg
    location/
      gym-vibe-cafe-exterior-middlesex-street.jpg
      gym-vibe-cafe-interior-counter.jpg
    menu/
      gym-vibe-cafe-menu-board-reference.jpg
    social/
      gym-vibe-cafe-social-preview.jpg
```

Rules:

- Do not commit unoptimised massive image files if avoidable.
- Do not leave random image names like `IMG_4839.jpg`.
- Do not store business/private files in public unless meant to be public.

---

## 42. Content Checklist Before Launch

Confirm:

```text
Business name spelling: Gym Vibe Café
Whether to use Café or Cafe consistently
Address is correct
Phone number is correct
Opening hours are correct
Saturday closure is correct
Sunday hours are correct
Breakfast/lunch availability until 3pm is correct
Menu prices are correct
Unclear menu items are verified
Instagram link works
Directions link works
Google rating snapshot is still acceptable to show
Any external order links are real and working
Photos are approved for use
Logo is approved for use
```

Recommended spelling rule:

```text
Use “Gym Vibe Café” in headings and branding.
Use “Gym Vibe Cafe” naturally once or twice in SEO text because some people search without the accent.
```

---

## 43. Responsive Design Requirements

Breakpoints:

```text
Mobile: 320px–767px
Tablet: 768px–1023px
Desktop: 1024px and above
Large desktop: 1280px and above
```

Mobile:

- Hero text readable without zoom.
- Primary buttons full-width or easy to tap.
- Sticky action bar visible.
- Menu cards stack vertically.
- Long menu categories remain readable.
- No horizontal scrolling.
- Images crop cleanly.
- Address and hours easy to find.

Tablet:

- Use 2-column grids where suitable.
- Cards should not become too wide.
- Menu remains easy to scan.

Desktop:

- Hero can use two-column layout.
- Menu cards can use 2 or 3 columns.
- Location and contact can sit side-by-side.
- Sections should have generous spacing.

---

## 44. Navigation and Scroll Behaviour

Section anchors:

```text
#menu
#hours
#location
#contact
```

Requirements:

- Header links scroll smoothly if supported.
- Do not create unnecessary extra pages.
- Ensure sticky header does not cover section headings after anchor navigation.
- Use `scroll-margin-top` if needed.

---

## 45. Button and CTA Rules

Primary buttons:

```text
View menu
Get directions
Call now
```

Secondary buttons:

```text
Follow Instagram
Read reviews if link supplied
Order collection if real link supplied
Order delivery if real link supplied
```

Rules:

- Every visible button must work.
- No button should be a dead link.
- Use clear labels, not vague labels like “Click here”.
- External links should open in a new tab where appropriate.
- Phone links should not open a new tab.

---

## 46. Copywriting Requirements

Approved phrases:

```text
Real food. Good energy. Fuel your vibe.
Classic café favourites and high-protein meals.
Breakfast, brunch, smoothies, coffee and meal prep pickups.
Made for lifters, fighters, workers, students and anyone who loves good food.
Find us in Kinning Park, Glasgow.
Breakfast & lunch available until 3pm.
Follow @GymVibeCafe for updates, giveaways and new menu drops.
```

Avoid:

```text
The best café in Glasgow unless verified or used as a quote
Guaranteed results
Lose weight
Build muscle faster
Medical/nutritional claims
Fake scarcity
Overly long paragraphs
```

---

## 47. Development Phases for Codex

### Phase 1: Project Inspection

Branch:

```text
feature/project-inspection
```

Tasks:

```text
Inspect current project structure.
Identify framework.
Identify styling system.
Identify where homepage lives.
Identify existing assets.
Check package scripts.
Run the development server if possible.
Check .gitignore.
Check for .DS_Store or generated files.
```

Acceptance criteria:

```text
The correct homepage file is known.
The project can run locally or blockers are listed.
No generated files are staged.
```

Suggested commit:

```text
chore: inspect Gym Vibe Cafe website project
```

### Phase 2: Add Business and Menu Data

Branch:

```text
feature/business-menu-data
```

Tasks:

```text
Create business info data file.
Create menu data file.
Create menu/business TypeScript types if using TypeScript.
Add phone, address, hours, Instagram and directions link.
Add menu categories and menu items.
Mark uncertain menu prices/items for verification.
```

Acceptance criteria:

```text
Business data is centralised.
Menu data is centralised.
No repeated hard-coded business info across components.
Unverified prices are clearly marked in the data.
```

Suggested commit:

```text
feat: add Gym Vibe Cafe business and menu data
```

### Phase 3: Build Core Landing Page Structure

Branch:

```text
feature/core-landing-page
```

Tasks:

```text
Create/replace homepage layout.
Add Header.
Add HeroSection.
Add QuickInfoStrip.
Add PopularPicksSection.
Add AboutSection.
Add FullMenuSection.
Add OpeningHoursSection.
Add LocationSection.
Add InstagramSection.
Add ContactSection.
Add Footer.
Add StickyMobileActionBar.
```

Acceptance criteria:

```text
All required sections render.
The page is one coherent landing page.
Navigation links point to correct sections.
Call, directions and Instagram buttons exist.
No payment or order system exists.
```

Suggested commit:

```text
feat: build Gym Vibe Cafe landing page structure
```

### Phase 4: Apply Brand Styling

Branch:

```text
feature/brand-styling
```

Tasks:

```text
Apply dark background.
Apply deep red accent styling.
Style headings and cards.
Style menu category headers.
Style CTAs.
Style sticky mobile bar.
Ensure high contrast.
Use responsive spacing.
```

Acceptance criteria:

```text
The page matches the Gym Vibe Café dark/red menu-board style.
The website feels fitness-focused and food-focused.
Text is readable.
Buttons are easy to see.
Mobile design is polished.
```

Suggested commit:

```text
style: apply Gym Vibe Cafe brand design
```

### Phase 5: Add Images and Assets

Branch:

```text
feature/site-assets
```

Tasks:

```text
Create image folders.
Add supplied logo.
Add hero image.
Add food photos.
Add smoothie photo.
Add exterior/interior photos.
Add favicon if supplied.
Optimise image usage.
Add alt text.
Use fallback layout where images are missing.
```

Acceptance criteria:

```text
Images load correctly.
Images have meaningful alt text.
Missing images do not break layout.
Large images are not used unnecessarily.
File names are descriptive.
```

Suggested commit:

```text
feat: add Gym Vibe Cafe website assets
```

### Phase 6: Improve Menu UX

Branch:

```text
feature/menu-ux
```

Tasks:

```text
Make popular picks visually strong.
Make full menu easy to scan.
Add category cards or accordions.
Add category notes.
Add price/availability note.
Ensure menu is usable on mobile.
```

Acceptance criteria:

```text
Menu can be read without pinch zoom.
Menu categories are clear.
Popular items stand out.
No ordering/cart behaviour is added.
```

Suggested commit:

```text
feat: improve cafe menu browsing experience
```

### Phase 7: Add SEO and Structured Data

Branch:

```text
feature/local-seo
```

Tasks:

```text
Add page title.
Add meta description.
Add Open Graph metadata.
Add LocalBusiness JSON-LD if practical.
Add semantic headings.
Check one H1 only.
Add descriptive alt text.
```

Acceptance criteria:

```text
Page title mentions Gym Vibe Café and Glasgow.
Meta description mentions Kinning Park and key offerings.
Local business details are represented accurately.
No fake reviews are marked up.
Heading order is logical.
```

Suggested commit:

```text
feat: add local SEO metadata
```

### Phase 8: Add Analytics Event Hooks Optional

Branch:

```text
feature/conversion-tracking
```

Tasks:

```text
Add tracking for call clicks if analytics exists.
Add tracking for directions clicks if analytics exists.
Add tracking for Instagram clicks if analytics exists.
Add tracking for menu CTA clicks if analytics exists.
Do not add complex analytics if not already configured.
Do not collect personal data.
```

Acceptance criteria:

```text
Tracking is simple and privacy-conscious.
The website still works if analytics is unavailable.
No intrusive cookie behaviour is added without consent handling.
```

Suggested commit:

```text
feat: add cafe conversion tracking hooks
```

### Phase 9: Accessibility and Mobile Polish

Branch:

```text
feature/accessibility-mobile-polish
```

Tasks:

```text
Check keyboard navigation.
Check focus states.
Check mobile button size.
Check colour contrast.
Check sticky mobile bar.
Check section spacing.
Check image alt text.
Check no horizontal scroll.
```

Acceptance criteria:

```text
Page is comfortable on mobile.
Interactive elements are easy to tap.
Keyboard focus is visible.
Text is readable.
No content is hidden by sticky elements.
```

Suggested commit:

```text
fix: polish mobile accessibility
```

### Phase 10: Final QA and Launch Prep

Branch:

```text
feature/final-qa
```

Tasks:

```text
Run local build.
Check console errors.
Test all links.
Test mobile width.
Test tablet width.
Test desktop width.
Verify business content.
Verify menu content.
Check image loading.
Check SEO metadata.
Check no fake order/payment features exist.
```

Acceptance criteria:

```text
Homepage loads correctly.
All visible buttons work.
Phone opens dialler.
Directions opens Google Maps.
Instagram opens correct profile.
Menu is readable.
Hours are correct.
No payment/order system exists.
No known broken links.
No generated or secret files are committed.
```

Suggested commit:

```text
fix: finalise Gym Vibe Cafe landing page
```

---

## 48. Manual QA Checklist

Before launch, test:

```text
Homepage loads
Hero section is clear
View menu button scrolls to menu
Call button opens tel link
Directions button opens maps link
Instagram button opens Instagram
Header navigation works
Sticky mobile action bar works
Popular picks display correctly
Full menu displays correctly
Menu prices are correct or marked for verification
Opening hours are correct
Saturday shows closed
Sunday shows 9am–3pm
Address is correct
Phone number is correct
Footer links work
Mobile layout works at 320px width
Mobile layout works at 390px width
Tablet layout works
Desktop layout works
No horizontal scroll
Text contrast is readable
Images have alt text
Large images do not slow the page badly
No fake order buttons
No payment form
No checkout
No basket/cart
No console errors
Production build passes
```

---

## 49. Definition of Done

The improved website is complete when:

```text
A customer understands what Gym Vibe Café offers within seconds.
A customer can view the menu comfortably on mobile.
A customer can call the café with one tap.
A customer can get directions with one tap.
A customer can find opening hours quickly.
A customer can follow Instagram.
The page uses the dark/red Gym Vibe Café brand style.
The website does not handle payments or orders.
The page has local SEO metadata.
The page is accessible and mobile-friendly.
The site has real photos or graceful placeholders.
All links work.
All business information is accurate.
```

---

## 50. Out of Scope

Do not build these in this version:

```text
Online ordering system
Checkout
Payments
Basket/cart
Booking system
Customer accounts
Admin dashboard
CMS
Database
Delivery API integration
Live Google reviews feed
Google review scraping
Newsletter system
Loyalty system
Mobile app
Multi-location system
```

---

## 51. Codex Master Prompt

Use this prompt when giving the full task to Codex:

```text
You are improving the Gym Vibe Café website into a polished one-page landing page.

The website must not process payments, take orders directly, manage bookings, collect card details, or run a checkout. Ordering and payment are handled separately. Only add external order buttons if real links are supplied.

Use the existing project stack and structure. If starting fresh, use Next.js, TypeScript and Tailwind CSS. Keep business data and menu data separate from UI components. Keep the homepage clean by composing reusable sections.

Business details:
- Name: Gym Vibe Café
- Address: 89 Middlesex St, Kinning Park, Glasgow G41 1EE
- Phone: 0141 286 0559
- Phone link: tel:+441412860559
- Instagram: https://www.instagram.com/gymvibecafe/
- Tagline: Eat Good. Feel Better. Fuel Your Vibe.
- Google rating snapshot: 4.9 stars from 121 reviews
- Opening hours: Monday–Friday 7am–4pm, Saturday closed, Sunday 9am–3pm
- Breakfast & lunch available until 3pm

Main goal:
Build a conversion-focused landing page that helps customers view the menu, call the café, get directions, check hours, and follow Instagram.

Required sections:
1. Header
2. Hero section
3. Quick info strip
4. Popular picks
5. About section
6. Full menu section
7. High-protein feature section
8. Smoothies feature section
9. Trust section
10. Opening hours section
11. Location and directions section
12. Instagram section
13. Contact call-to-action section
14. Footer
15. Sticky mobile action bar

Design style:
- Dark background
- Deep red accents
- White/off-white text
- Menu-board inspired cards
- Fitness café energy
- Mobile-first responsive layout
- Strong clear CTAs

Primary CTAs:
- View menu
- Get directions
- Call now
- Follow Instagram

Do not create fake links. Do not create checkout, cart, payment, booking, database, login, or admin features.

After implementation, report:
1. Files changed
2. Components created
3. Data files created
4. Commands run
5. Manual tests completed
6. Missing assets or content still needed
7. Suggested commit message
```

---

## 52. Codex Phase Prompt Template

Use this for one phase at a time:

```text
You are working on the Gym Vibe Café landing page.

Work only on this phase: [INSERT PHASE NAME]

Do not build payments, checkout, cart, ordering, booking, database, admin, accounts, or any backend features.
Use only supplied real links.
Keep the page mobile-first, accessible, and aligned with the dark/red Gym Vibe Café brand.
Keep business data and menu data separate from UI components.

Phase tasks:
[PASTE TASKS]

Acceptance criteria:
[PASTE ACCEPTANCE CRITERIA]

After coding, report:
1. Files changed
2. Commands run
3. Manual tests performed
4. Any assumptions or missing assets
5. Suggested commit message
```

---

## 53. Client Asset Request Message

Send this to the café owner:

```text
Hi, to make the Gym Vibe Café website look professional and make sure all details are correct, could you send over:

1. Logo file, ideally SVG or transparent PNG
2. A clear photo of the outside of the café
3. A clear photo of the inside/counter area
4. 4–6 good food photos, especially the full Scottish breakfast, high-protein pancakes, Cajun chicken pasta, lemon pepper chicken rice bowl, loaded fries and filled rolls
5. 1–3 smoothie/drink photos
6. The latest menu as a PDF, document, spreadsheet or clear photo
7. Confirmation of current opening hours
8. Confirmation of phone number and address
9. Any collection or delivery links you want added
10. Google review/profile link if you want a reviews button
11. Any social links besides Instagram

The website will not handle payments or orders directly. It will send customers to your existing links, phone number, directions and Instagram.
```

---

## 54. Launch Notes

Before going live:

```text
Get written confirmation that menu prices are correct.
Get written confirmation that hours are correct.
Get permission to use all photos.
Check all links on a real phone.
Check page on mobile data if possible.
Check the business owner is happy with wording.
Check no private files or secrets are committed.
```

After launch:

```text
Offer content updates within 7 working days.
Update menu changes when requested.
Update hours when requested.
Swap photos when requested.
Add real order links if supplied.
Send occasional performance/click summary if analytics exists.
```
