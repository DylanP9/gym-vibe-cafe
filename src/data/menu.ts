import type { MenuCategory, MenuItem } from "@/types/menu";

const hotFilledRolls: MenuItem = {
  id: "hot-filled-rolls",
  name: "Hot Filled Rolls",
  price: "£2.85",
  secondaryPrice: "Double £3.75",
  isPopular: true,
};

const fullScottishBreakfast: MenuItem = {
  id: "full-scottish-breakfast",
  name: "Full Scottish Breakfast",
  price: "£6.95",
  secondaryPrice: "XL £10.95",
  isPopular: true,
};

const highProteinPancakes: MenuItem = {
  id: "high-protein-pancakes",
  name: "High Protein Pancakes with Mixed Fruit",
  price: "£5.45",
  isPopular: true,
};

const honeyGarlicMac: MenuItem = {
  id: "honey-garlic-butter-chicken-mac",
  name: "Honey Garlic Butter Chicken Mac & Cheese",
  price: "£6.95",
  isPopular: true,
  macros: { calories: 588, proteinGrams: 59, carbsGrams: 52, fatGrams: 16 },
};

const lemonPepperBowl: MenuItem = {
  id: "lemon-pepper-chicken-rice-bowl",
  name: "Lemon Pepper Chicken Rice Bowl",
  price: "£6.95",
  isPopular: true,
  macros: { calories: 521, proteinGrams: 46, carbsGrams: 46, fatGrams: 17 },
};

const creamyCajunPasta: MenuItem = {
  id: "creamy-cajun-chicken-pasta",
  name: "Creamy Cajun Chicken Pasta",
  price: "£6.95",
  isPopular: true,
  macros: { calories: 523, proteinGrams: 64, carbsGrams: 42, fatGrams: 11 },
};

const loadedFries: MenuItem = {
  id: "loaded-fries-chicken-mince",
  name: "Loaded Fries, Chicken or Mince",
  price: "£6.45",
  isPopular: true,
};

export const menuCategories: MenuCategory[] = [
  {
    id: "popular-picks",
    title: "Popular Picks",
    description: "Customer favourites from across the in-store menu.",
    items: [
      fullScottishBreakfast,
      hotFilledRolls,
      highProteinPancakes,
      creamyCajunPasta,
      lemonPepperBowl,
      {
        id: "fresh-frozen-smoothies-highlight",
        name: "Fresh Frozen Fruit Smoothies",
        price: "£3.95",
        priceNote: "Add protein & chia seeds £1.50",
        isPopular: true,
      },
      loadedFries,
      honeyGarlicMac,
    ],
  },
  {
    id: "traditional-breakfast-lunch",
    title: "Traditional Breakfast & Lunch",
    availabilityNote: "Available until 3pm.",
    items: [
      hotFilledRolls,
      fullScottishBreakfast,
      { id: "vegetarian-breakfast", name: "Vegetarian Breakfast", price: "£6.95", isVegetarian: true },
      { id: "french-toast-topping", name: "French Toast with Topping", price: "£4.50" },
      { id: "eggs-on-toast", name: "Eggs on Toast", price: "£4.50" },
    ],
  },
  {
    id: "kids-meals",
    title: "Kids Meals",
    customerNote: "All kids meals served with a side and drink.",
    items: [
      { id: "kids-macaroni-cheese", name: "Macaroni Cheese", price: "£4.95" },
      { id: "kids-pizza", name: "Pizza", price: "£4.95" },
      { id: "kids-popcorn-chicken", name: "Popcorn Chicken", price: "£4.95" },
      { id: "kids-fish-fingers", name: "Fish Fingers", price: "£4.95" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { id: "homemade-soup", name: "Homemade Soup", price: "£2.45", secondaryPrice: "Large £2.95" },
      { id: "halloumi-fries-chilli-jam", name: "Halloumi Fries & Chilli Jam", price: "£4.50" },
      { id: "onion-rings", name: "Onion Rings", price: "£3.50" },
      { id: "chicken-bites", name: "100% Chicken Bites", price: "£4.95" },
      { id: "popcorn-chicken", name: "Popcorn Chicken", price: "£4.95" },
      { id: "fries", name: "Fries", price: "£2.95" },
      { id: "seasoned-fries", name: "Seasoned Fries", price: "£3.95" },
      { id: "nachos", name: "Nachos", price: "£4.95" },
      { id: "loaded-nachos", name: "Loaded Nachos", price: "£6.95" },
    ],
  },
  {
    id: "traditional-mains",
    title: "Traditional Mains",
    items: [
      { id: "steak-mince-tatties", name: "Steak Mince & Tatties", price: "£6.95" },
      { id: "fish-chips", name: "Fish & Chips", price: "£6.50" },
      { id: "macaroni-cheese-chips", name: "Macaroni Cheese & Chips", price: "£6.50" },
      { id: "scotch-pie-chips-beans", name: "Scotch Pie, Chips & Beans", price: "£5.45" },
      { id: "chicken-curry-rice", name: "Breast of Chicken Curry & Rice", price: "£6.95" },
      { id: "hotdog-toppings", name: "Hotdog with Toppings", price: "£4.65" },
      { id: "beef-burger-chips", name: "Handmade Beef Burger + Chips", price: "£6.50" },
      { id: "chicken-burger-chips", name: "Chicken Burger + Chips", price: "£5.95" },
      { id: "chilli-con-carne-rice", name: "Chilli Con Carne + Rice", price: "£6.95" },
    ],
  },
  {
    id: "build-your-own",
    title: "Build Your Own",
    availabilityNote: "Available until 3pm.",
    description:
      "Choose your bread/base, filling, salad and dressing. This is displayed as an in-store menu guide only, not an online order builder.",
    customerNote: "Ask in café for current build-your-own options.",
    items: [
      { id: "cold-filled-roll", name: "Cold Filled Roll", price: "White £2.65", secondaryPrice: "Whole £2.95" },
      { id: "sandwich", name: "Sandwich", price: "White £2.65", secondaryPrice: "Whole £2.95" },
      { id: "toastie", name: "Toastie", price: "White £4.00", secondaryPrice: "Whole £4.25" },
      { id: "panini", name: "Panini", price: "White £4.45", secondaryPrice: "Whole £4.75" },
      { id: "sub-roll", name: "12-inch Sub Roll", price: "White £4.45", secondaryPrice: "Whole £4.75" },
      { id: "wrap", name: "Wrap", price: "White £4.45", secondaryPrice: "Whole £4.75" },
      { id: "baked-potato", name: "Baked Potato", price: "£4.95" },
      { id: "pasta-salad-box", name: "Pasta & Salad Box", price: "White £4.45", secondaryPrice: "Whole £4.75" },
    ],
    addOns: [
      { name: "Additional fillings", price: "+£0.95" },
      { name: "Additional salad box option", price: "+£0.75" },
    ],
    optionGroups: [
      {
        title: "Fillings",
        options: ["Coronation Chicken", "Mexican Chicken", "Sweet Chilli", "Chicken Tikka", "Chicken Mayo", "Baked Beans", "Cheese Savoury", "Cheese", "Sweetcorn", "Ham", "Coleslaw", "Egg", "Tuna Mayo", "Turkey"],
      },
      {
        title: "Salad Options",
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
    availabilityNote: "Available until 3pm.",
    items: [
      { id: "eggs-benedict", name: "Eggs Benedict", price: "£6.95" },
      { id: "eggs-florentine", name: "Eggs Florentine", price: "£5.95" },
      { id: "avocado-salmon-egg", name: "Avocado, Salmon & Egg", price: "£8.95" },
      { id: "protein-overnight-oats", name: "Protein Packed Overnight Oats", price: "£4.45" },
      { id: "high-protein-vitality-bowl", name: "High Protein Vitality Bowl", price: "£5.95" },
      { id: "chicken-sausage-toast-eggs", name: "Homemade Chicken Sausage with Toast & Eggs", price: "£5.95" },
      highProteinPancakes,
    ],
  },
  {
    id: "nutritional-mains",
    title: "Nutritional Mains",
    description:
      "High-protein cafe meals with macros shown where supplied on the menu-board artwork.",
    customerNote:
      "Macros are based on supplied café menu-board artwork and may vary by portion and preparation.",
    items: [
      honeyGarlicMac,
      { id: "crispy-salt-pepper-chicken-chips", name: "Crispy Salt & Pepper Chicken & Chips", price: "£6.95", macros: { calories: 438, proteinGrams: 40, carbsGrams: 47, fatGrams: 10 } },
      { id: "chipotle-steak-potatoes", name: "Creamy Chipotle Steak & Potatoes", price: "£7.95", macros: { calories: 532, proteinGrams: 50, carbsGrams: 47, fatGrams: 12 } },
      lemonPepperBowl,
      { id: "garlic-herb-cajun-chicken-mash", name: "Creamy Garlic Herb Cajun Chicken & Mash", price: "£6.95", macros: { calories: 514, proteinGrams: 55, carbsGrams: 42, fatGrams: 14 } },
      creamyCajunPasta,
      { id: "garlic-shrimp-linguine", name: "Creamy Garlic Shrimp Linguine", price: "£6.95", macros: { calories: 483, proteinGrams: 51, carbsGrams: 45, fatGrams: 11 } },
      { id: "spicy-salmon-ramen", name: "Creamy Spicy Salmon Ramen Noodles", price: "£7.95", macros: { calories: 543, proteinGrams: 44, carbsGrams: 40, fatGrams: 23 } },
    ],
  },
  {
    id: "smoothies",
    title: "Fresh Frozen Fruit Smoothies",
    priceNote: "All smoothies £3.95. Add protein & chia seeds £1.50.",
    items: [
      { id: "green-reviver", name: "Green Reviver", price: "£3.95" },
      { id: "acai-kick", name: "Acai Kick", price: "£3.95" },
      { id: "blue-blast", name: "Blue Blast", price: "£3.95" },
      { id: "super-green", name: "Super Green", price: "£3.95" },
      { id: "passion-storm", name: "Passion Storm", price: "£3.95" },
      { id: "ginger-beets", name: "Ginger Beets", price: "£3.95" },
    ],
    addOns: [{ name: "Protein & chia seeds", price: "£1.50" }],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "chicken-strips", name: "Succulent Chicken Strips", price: "£5.95" },
      { id: "mixed-greens", name: "Mixed Greens with Garlic and Pepper", price: "£3.95" },
      { id: "sweet-potato-fries", name: "Sweet Potato Fries", price: "£3.95" },
      loadedFries,
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    description: "Work hard. Drink coffee.",
    items: [
      { id: "flat-white", name: "Flat White", options: ["12oz Regular £2.95", "16oz Large £3.45", "16oz Iced £4.55"] },
      { id: "latte", name: "Latte", options: ["12oz Regular £2.95", "16oz Large £3.45", "16oz Iced £4.55"] },
      { id: "cappuccino", name: "Cappuccino", options: ["12oz Regular £2.95", "16oz Large £3.45", "16oz Iced £4.55"] },
      { id: "americano", name: "Americano", options: ["12oz Regular £2.30", "16oz Large £2.95", "16oz Iced £3.95"] },
      { id: "espresso", name: "Espresso", options: ["12oz Regular £1.80", "16oz Large £2.20"] },
      { id: "macchiato", name: "Macchiato", options: ["12oz Regular £3.95", "16oz Large £4.45", "16oz Iced £5.45"] },
      { id: "mocha", name: "Mocha", options: ["12oz Regular £3.95", "16oz Large £4.45", "16oz Iced £5.45"] },
    ],
    addOns: [{ name: "Syrup shot", price: "£1.00" }],
    optionGroups: [
      {
        title: "Syrup Options",
        options: ["Caramel", "Sugar Free Caramel", "Hazelnut", "Toffee Nut", "Vanilla", "Sugar Free Vanilla", "Chai Tea", "Brown Sugar", "Chocolate", "Cinnamon"],
      },
    ],
  },
  {
    id: "other-drinks",
    title: "Other Drinks",
    items: [
      { id: "green-matcha", name: "Green Matcha", options: ["12oz Regular £3.95", "16oz Iced £4.95"] },
      { id: "green-tea", name: "Green Tea", options: ["12oz Regular £1.95", "16oz Iced £2.95"] },
      { id: "hibiscus-tea", name: "Hibiscus Tea", options: ["12oz Regular £2.25", "16oz Iced £3.25"] },
      { id: "peppermint-tea", name: "Peppermint Tea", options: ["12oz Regular £1.95", "16oz Iced £2.95"] },
      { id: "breakfast-tea", name: "Breakfast Tea", options: ["12oz Regular £1.55"] },
      { id: "chocolate", name: "Chocolate", options: ["12oz Regular £2.95", "16oz Iced £3.95"] },
    ],
    addOns: [{ name: "Marshmallows & cream", price: "£1.00" }],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "chocolate-fudge-cake", name: "Chocolate Fudge Cake", price: "£3.50", secondaryPrice: "With ice cream or custard £4.50" },
      { id: "apple-pie", name: "Apple Pie", price: "£2.50", secondaryPrice: "With ice cream or custard £3.50" },
      { id: "caramel-shortcake", name: "Old School Caramel Shortcake", price: "£2.50", secondaryPrice: "With ice cream or custard £3.50" },
      { id: "birthday-cake", name: "Birthday Cake", price: "£2.20", secondaryPrice: "With ice cream or custard £3.20" },
      { id: "ginger-bread-cake", name: "Ginger Bread Cake", price: "£2.20", secondaryPrice: "With ice cream or custard £3.20" },
    ],
  },
];

export const popularPicks = menuCategories[0].items;

export const homepageMenuCategories = menuCategories.filter((category) =>
  ["popular-picks", "nutritional-mains"].includes(category.id),
);
