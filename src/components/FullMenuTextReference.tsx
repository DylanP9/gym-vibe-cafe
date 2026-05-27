import type { MenuCategory, MenuItem } from "@/types/menu";
import { menuCategories } from "@/data/menu";

function MenuItemLine({ item }: { item: MenuItem }) {
  const prices = [item.price, item.secondaryPrice, item.priceNote].filter(Boolean).join(" · ");

  return (
    <li className="border-b border-white/[0.07] py-2.5 last:border-b-0">
      <div className="flex justify-between gap-4">
        <span className="font-semibold text-[#f5f0e7]">
          {item.name}
          {item.isPopular ? <span className="ml-2 text-xs uppercase tracking-wider text-[#e35a5b]">Popular</span> : null}
          {item.isVegetarian ? <span className="ml-2 text-xs uppercase tracking-wider text-[#a9d8b4]">Vegetarian</span> : null}
        </span>
        {prices ? <span className="shrink-0 text-right text-[#efcb9c]">{prices}</span> : null}
      </div>
      {item.options ? <p className="mt-1 text-sm text-[#c8beaf]">{item.options.join(" · ")}</p> : null}
      {item.macros ? (
        <p className="mt-1 text-sm text-[#c8beaf]">
          {item.macros.calories} kcal · {item.macros.proteinGrams}g protein · {item.macros.carbsGrams}g carbs · {item.macros.fatGrams}g fat
        </p>
      ) : null}
    </li>
  );
}

function CategoryReference({ category }: { category: MenuCategory }) {
  return (
    <article className="rounded-xl border border-white/10 bg-[#101211] p-4">
      <h3 className="text-lg font-black uppercase text-[#faf6ee]">{category.title}</h3>
      {category.availabilityNote ? <p className="mt-2 text-sm font-semibold text-[#efcb9c]">{category.availabilityNote}</p> : null}
      {category.description ? <p className="mt-2 text-sm leading-6 text-[#c9c0b2]">{category.description}</p> : null}
      {category.customerNote ? <p className="mt-2 text-sm leading-6 text-[#c9c0b2]">{category.customerNote}</p> : null}
      {category.priceNote ? <p className="mt-2 text-sm font-semibold text-[#efcb9c]">{category.priceNote}</p> : null}
      <ul className="mt-3 text-sm">
        {category.items.map((item) => <MenuItemLine key={item.id} item={item} />)}
      </ul>
      {category.addOns ? (
        <p className="mt-3 text-sm text-[#c9c0b2]">
          Add-ons: {category.addOns.map((addOn) => `${addOn.name} ${addOn.price}`).join(" · ")}
        </p>
      ) : null}
      {category.optionGroups ? category.optionGroups.map((group) => (
        <p key={group.title} className="mt-2 text-sm text-[#c9c0b2]">
          <span className="font-semibold text-[#f5f0e7]">{group.title}:</span> {group.options.join(", ")}
        </p>
      )) : null}
    </article>
  );
}

export function FullMenuTextReference() {
  return (
    <section className="content-shell pb-16 sm:pb-24" aria-labelledby="full-menu-reference-heading">
      <h2 id="full-menu-reference-heading" className="mb-4 text-2xl font-black uppercase tracking-[-0.03em] text-[#faf6ee]">
        Complete menu reference
      </h2>
      <details className="rounded-2xl border border-white/10 bg-[#11100f] p-4 sm:p-6">
        <summary className="cursor-pointer list-none text-lg font-bold text-[#faf6ee]">
          View complete text-only menu
          <span className="ml-3 text-sm font-medium text-[#efcb9c]">All categories</span>
        </summary>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#c9c0b2]">
          This complete menu reference is provided for easy reading and printing. Use the category browser above for the quickest mobile experience.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {menuCategories.map((category) => <CategoryReference key={category.id} category={category} />)}
        </div>
      </details>
    </section>
  );
}
