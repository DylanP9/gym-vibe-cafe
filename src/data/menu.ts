import type { MenuCategory, MenuItem } from "@/types/menu";

export const popularPicks: MenuItem[] = [
  {
    id: "popular-full-scottish",
    name: "Full Scottish Breakfast",
    description: "A proper café breakfast to start the day.",
    price: "\u00a36.95 / XL \u00a310.95",
    tags: ["popular", "breakfast", "traditional"],
  },
  {
    id: "popular-filled-rolls",
    name: "Hot Filled Rolls",
    price: "\u00a32.85 / double \u00a33.75",
    tags: ["popular", "breakfast", "traditional"],
  },
  {
    id: "popular-pancakes",
    name: "High Protein Pancakes with Mixed Fruit",
    description: "A sweeter high-protein choice with mixed fruit.",
    price: "\u00a35.45",
    tags: ["popular", "high-protein", "breakfast"],
  },
  {
    id: "popular-cajun-pasta",
    name: "Creamy Cajun Chicken Pasta",
    description: "A filling nutritional main with bold flavour.",
    price: "\u00a36.95",
    tags: ["popular", "high-protein"],
  },
  {
    id: "popular-rice-bowl",
    name: "Lemon Pepper Chicken Rice Bowl",
    description: "Fresh, simple and protein-focused.",
    price: "\u00a36.95",
    tags: ["popular", "high-protein"],
  },
  {
    id: "popular-smoothies",
    name: "Fresh Frozen Fruit Smoothies",
    description: "Cold fruit smoothies with optional protein and chia seeds.",
    price: "\u00a33.95",
    tags: ["popular", "smoothie"],
  },
  {
    id: "popular-loaded-fries",
    name: "Loaded Fries, Chicken or Mince",
    description: "A comfort-food hit with chicken or mince.",
    price: "\u00a36.45",
    tags: ["popular"],
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "traditional-breakfast-lunch",
    title: "Traditional Breakfast & Lunch",
    availabilityNote: "Available until 3pm",
    items: [
      { id: "hot-filled-rolls", name: "Hot Filled Rolls", price: "\u00a32.85 / double \u00a33.75", tags: ["breakfast", "traditional", "popular"] },
      { id: "full-scottish", name: "Full Scottish Breakfast", price: "\u00a36.95 / XL \u00a310.95", tags: ["breakfast", "traditional", "popular"] },
      { id: "vegetarian-breakfast", name: "Vegetarian Breakfast", price: "\u00a36.95", tags: ["breakfast", "traditional"] },
      { id: "french-toast", name: "French Toast with Topping", price: "\u00a34.50", tags: ["breakfast"] },
      { id: "eggs-on-toast", name: "Eggs on Toast", price: "\u00a34.50", tags: ["breakfast"] },
    ],
  },
  {
    id: "kids-meals",
    title: "Kids Meals",
    customerNote: "All kids meals served with a side and drink.",
    items: [
      { id: "kids-macaroni", name: "Macaroni Cheese", price: "\u00a34.95", tags: ["kids"] },
      { id: "kids-pizza", name: "Pizza", price: "\u00a34.95", tags: ["kids"] },
      { id: "kids-popcorn-chicken", name: "Popcorn Chicken", price: "\u00a34.95", tags: ["kids"] },
      { id: "kids-fish-fingers", name: "Fish Fingers", price: "\u00a34.95", tags: ["kids"] },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { id: "soup", name: "Homemade Soup", price: "\u00a32.45 / large \u00a32.95" },
      { id: "halloumi-fries", name: "Halloumi Fries & Chilli Jam", price: "\u00a34.50" },
      { id: "onion-rings", name: "Onion Rings", price: "\u00a33.50" },
      { id: "chicken-bites", name: "100% Chicken Bites", price: "\u00a34.95" },
      { id: "popcorn-chicken", name: "Popcorn Chicken", price: "\u00a34.95" },
      { id: "fries", name: "Fries / Seasoned Fries", price: "\u00a32.95 / \u00a33.95" },
      { id: "nachos", name: "Nachos / Loaded Nachos", price: "\u00a34.95 / \u00a36.95" },
    ],
  },
  {
    id: "traditional-mains",
    title: "Traditional Mains",
    items: [
      { id: "mince-tatties", name: "Steak Mince & Tatties", price: "\u00a36.95", tags: ["traditional"] },
      { id: "fish-chips", name: "Fish & Chips", price: "\u00a36.50", tags: ["traditional"] },
      {
        id: "macaroni-chips",
        name: "Macaroni Cheese & Chips",
        priceNote: "Price to be confirmed",
        needsVerification: true,
        tags: ["traditional", "verify-price"],
      },
      { id: "scotch-pie", name: "Scotch Pie, Chips & Beans", price: "\u00a35.45", tags: ["traditional"] },
      { id: "chicken-curry", name: "Breast of Chicken Curry & Rice", price: "\u00a36.95", tags: ["traditional"] },
      { id: "hotdog", name: "Hotdog with Toppings", price: "\u00a34.65", tags: ["traditional"] },
      { id: "beef-burger", name: "Handmade Beef Burger + Chips", price: "\u00a36.50", tags: ["traditional"] },
      { id: "chicken-burger", name: "Chicken Burger + Chips", price: "\u00a35.95", tags: ["traditional"] },
      { id: "chilli-con-carne", name: "Chilli Con Carne + Rice", price: "\u00a36.95", tags: ["traditional"] },
    ],
  },
  {
    id: "build-your-own",
    title: "Build Your Own",
    availabilityNote: "Available until 3pm",
    customerNote: "Ask in-store for current build-your-own options and prices.",
    items: [],
    optionGroups: [
      {
        title: "Choose a base",
        options: ["Cold Filled Roll", "Sandwich", "Toastie", "Panini", "12-inch Sub Roll", "Wrap", "Baked Potato", "Pasta & Salad Box"],
      },
      {
        title: "Fillings",
        options: ["Coronation Chicken", "Mexican Chicken", "Smoked Chilli Ham", "Chicken Tikka", "Chicken Mayo", "Baked Beans", "Cheese Savoury", "Sweetcorn", "Coleslaw", "Egg", "Tuna Mayo", "Turkey"],
      },
      {
        title: "Salad options",
        options: ["Lettuce", "Tomato", "Cucumber", "Onion", "Red Onion", "Pepper", "Jalapeno", "Branston Pickle"],
      },
      {
        title: "Dressings",
        options: ["Balsamic Vinegar", "Caesar", "Southwest Sauce", "Sweet Chilli", "Sriracha Sauce", "Spicy Mayo", "Pesto", "Avocado Lime", "Ranch"],
      },
    ],
  },
  {
    id: "nutritional-breakfast-lunch",
    title: "Nutritional Breakfast & Lunch",
    availabilityNote: "Available until 3pm",
    items: [
      { id: "eggs-benedict", name: "Eggs Benedict", price: "\u00a36.95", tags: ["breakfast"] },
      { id: "eggs-florentine", name: "Eggs Florentine", price: "\u00a35.95", tags: ["breakfast"] },
      { id: "avocado-salmon-egg", name: "Avocado, Salmon & Egg", price: "\u00a38.95", tags: ["breakfast"] },
      { id: "protein-oats", name: "Protein Packed Overnight Oats", price: "\u00a34.45", tags: ["breakfast", "high-protein"] },
      { id: "vitality-bowl", name: "High Protein Vitality Bowl", price: "\u00a35.95", tags: ["breakfast", "high-protein"] },
      { id: "chicken-sausage-eggs", name: "Homemade Chicken Sausage with Toast & Eggs", price: "\u00a35.95", tags: ["breakfast"] },
      { id: "protein-pancakes", name: "High Protein Pancakes with Mixed Fruit", price: "\u00a35.45", tags: ["breakfast", "high-protein", "popular"] },
    ],
  },
  {
    id: "nutritional-mains",
    title: "Nutritional Mains",
    items: [
      { id: "honey-chicken-mac", name: "Honey Garlic Butter Chicken Mac & Cheese", price: "\u00a36.95" },
      { id: "salt-pepper-chicken", name: "Crispy Salt & Pepper Chicken & Chips", price: "\u00a36.95" },
      { id: "chipotle-steak", name: "Creamy Chipotle Steak & Potatoes", price: "\u00a37.95" },
      { id: "lemon-pepper-rice", name: "Lemon Pepper Chicken Rice Bowl", price: "\u00a36.95", tags: ["popular"] },
      { id: "garlic-cajun-mash", name: "Creamy Garlic Herb Cajun Chicken & Mash", price: "\u00a36.95" },
      { id: "cajun-pasta", name: "Creamy Cajun Chicken Pasta", price: "\u00a36.95", tags: ["popular"] },
      { id: "shrimp-linguine", name: "Creamy Garlic Shrimp Linguine", price: "\u00a36.95" },
      { id: "salmon-ramen", name: "Creamy Spicy Salmon Ramen Noodles", price: "\u00a37.95" },
    ],
  },
  {
    id: "smoothies",
    title: "Fresh Frozen Fruit Smoothies",
    subtitle: "All smoothies \u00a33.95",
    customerNote: "Add protein & chia seeds: \u00a31.50",
    items: [
      { id: "green-reviver", name: "Green Reviver", price: "\u00a33.95", tags: ["smoothie"] },
      { id: "acai-kick", name: "Acai Kick", price: "\u00a33.95", tags: ["smoothie"] },
      { id: "blue-blast", name: "Blue Blast", price: "\u00a33.95", tags: ["smoothie"] },
      { id: "super-green", name: "Super Green", price: "\u00a33.95", tags: ["smoothie"] },
      { id: "passion-storm", name: "Passion Storm", price: "\u00a33.95", tags: ["smoothie"] },
      { id: "ginger-beats", name: "Ginger Beats", price: "\u00a33.95", tags: ["smoothie"] },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "chicken-strips", name: "Succulent Chicken Strips", price: "\u00a35.95" },
      { id: "mixed-greens", name: "Mixed Greens with Garlic and Pepper", price: "\u00a33.95" },
      { id: "sweet-potato-fries", name: "Sweet Potato Fries", price: "\u00a33.95" },
      { id: "loaded-fries", name: "Loaded Fries, Chicken or Mince", price: "\u00a36.45", tags: ["popular"] },
    ],
  },
];

export const highProteinFeatureItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => item.tags?.includes("high-protein"));
