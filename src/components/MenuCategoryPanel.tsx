import { MenuItemCard } from "@/components/MenuItemCard";
import type { MenuCategory } from "@/types/menu";

interface MenuCategoryPanelProps {
  category: MenuCategory;
}

export function MenuCategoryPanel({ category }: MenuCategoryPanelProps) {
  return (
    <section id={`menu-panel-${category.id}`} role="tabpanel" aria-label={category.title} className="rounded-2xl border border-white/10 bg-[#11100f] p-4 sm:p-6">
      <header className="mb-6 border-b border-white/10 pb-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d14a4b]">Currently viewing</p>
        <h2 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#faf6ee]">{category.title}</h2>
        {category.description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c7beaf]">{category.description}</p> : null}
        {category.availabilityNote ? <p className="mt-4 inline-flex rounded-full border border-[#a42425]/45 bg-[#211516] px-3 py-2 text-sm font-semibold text-[#f1d8bc]">{category.availabilityNote}</p> : null}
        {category.priceNote ? <p className="mt-4 text-sm font-semibold text-[#efcb9c]">{category.priceNote}</p> : null}
        {category.customerNote ? <p className="mt-4 text-sm leading-6 text-[#d4c9bb]">{category.customerNote}</p> : null}
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
      {category.addOns ? (
        <aside className="mt-6 rounded-xl border border-[#a42425]/30 bg-[#181311] p-4" aria-label={`${category.title} add-ons`}>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#f5ede2]">Add-ons</h3>
          <ul className="mt-3 grid gap-2 text-sm text-[#d9d0c4] sm:grid-cols-2">
            {category.addOns.map((addOn) => (
              <li key={addOn.name} className="flex justify-between gap-4 rounded-md bg-white/[0.04] px-3 py-2">
                <span>{addOn.name}</span>
                <span className="font-bold text-[#efcb9c]">{addOn.price}</span>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
      {category.optionGroups ? (
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {category.optionGroups.map((group) => (
            <section key={group.title} className="rounded-xl border border-white/10 bg-[#171413] p-4" aria-label={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#f5ede2]">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm text-[#cfc6b8]">
                {group.options.map((option) => (
                  <li key={option} className="rounded-full border border-white/10 px-3 py-1.5">{option}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}
    </section>
  );
}
