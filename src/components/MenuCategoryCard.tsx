import type { MenuCategory } from "@/types/menu";

interface MenuCategoryCardProps {
  category: MenuCategory;
}

export function MenuCategoryCard({ category }: MenuCategoryCardProps) {
  return (
    <article id={category.id} className="menu-card scroll-mt-28 overflow-hidden">
      <div className="border-b border-[#a42425]/50 bg-[linear-gradient(100deg,#7d1b1c,#501416)] px-5 py-4">
        <h3 className="text-lg font-black uppercase tracking-wide text-white">{category.title}</h3>
        {category.subtitle ? (
          <p className="mt-1 text-sm font-semibold text-[#fae9dc]">{category.subtitle}</p>
        ) : null}
        {category.availabilityNote ? (
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#f4d5bd]">
            {category.availabilityNote}
          </p>
        ) : null}
      </div>
      <div className="p-5">
        {category.items.length ? (
          <ul className="space-y-3">
            {category.items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium leading-6 text-[#f4f0e8]">
                    {item.name}
                    {item.tags?.includes("popular") ? (
                      <span className="ml-2 inline-flex rounded-full bg-[#a42425]/20 px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-widest text-[#f09882]">
                        Popular
                      </span>
                    ) : null}
                  </p>
                  {item.description ? (
                    <p className="mt-1 text-xs leading-5 text-[#bdb6aa]">{item.description}</p>
                  ) : null}
                </div>
                <p className={`shrink-0 text-right text-sm font-semibold ${item.needsVerification ? "text-[#e3b07b]" : "text-[#efe3d2]"}`}>
                  {item.price ?? item.priceNote}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
        {category.optionGroups?.map((group) => (
          <div key={group.title} className="mb-5 last:mb-0">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d14a4b]">
              {group.title}
            </h4>
            <p className="text-sm leading-7 text-[#eee7dc]">{group.options.join(" • ")}</p>
          </div>
        ))}
        {category.customerNote ? (
          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-[#d0c7bb]">
            {category.customerNote}
          </p>
        ) : null}
      </div>
    </article>
  );
}
