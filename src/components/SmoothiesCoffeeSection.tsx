import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { menuCategories } from "@/data/menu";

const categoryIds = ["smoothies", "coffee"] as const;

export function SmoothiesCoffeeSection() {
  const categories = categoryIds
    .map((id) => menuCategories.find((category) => category.id === id))
    .filter((category) => category !== undefined);

  return (
    <section className="section-shell section-divider bg-[#0b0b0a]" aria-labelledby="drinks-heading">
      <div className="content-shell">
        <SectionHeading id="drinks-heading" eyebrow="Smoothies and coffee" title="Drinks for the morning run or the lunch break">
          Fresh frozen fruit smoothies, coffee, tea and iced options are listed
          on the menu. Protein and chia can be added to smoothies where available.
        </SectionHeading>
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.map((category) => (
            <section key={category.id} className="rounded-lg border border-white/10 bg-[#10100f] p-5 sm:p-6" aria-label={category.title}>
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-[#faf6ee]">
                    {category.title}
                  </h3>
                  {category.priceNote ? (
                    <p className="mt-2 text-sm font-bold text-[#f0c090]">{category.priceNote}</p>
                  ) : null}
                </div>
                <span className="rounded-md border border-[#b51f23]/45 bg-[#170d0d] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#f5d8d8]">
                  {category.items.length} items
                </span>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {category.items.slice(0, 6).map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3">
                    <span className="font-bold leading-6 text-[#f5f0e8]">{item.name}</span>
                    {item.price ? <span className="shrink-0 font-black text-[#f0c090]">{item.price}</span> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-8">
          <ActionLink href="/menu" variant="secondary">See all drinks</ActionLink>
        </div>
      </div>
    </section>
  );
}
