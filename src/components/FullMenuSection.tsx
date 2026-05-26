import { MenuCategoryCard } from "@/components/MenuCategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";
import { menuCategories } from "@/data/menu";

export function FullMenuSection() {
  return (
    <section id="menu" className="section-shell scroll-mt-20" aria-labelledby="menu-heading">
      <div className="content-shell">
        <SectionHeading id="menu-heading" eyebrow="Full menu" title="Choose your vibe">
          Explore breakfast, comfort-food classics, nutritional mains and fresh
          smoothies. {businessInfo.breakfastLunchNote}
        </SectionHeading>
        <nav className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[#e4ddd2] hover:border-[#b72d2e] hover:text-white"
            >
              {category.title}
            </a>
          ))}
        </nav>
        <div className="grid items-start gap-4 lg:grid-cols-2">
          {menuCategories.map((category) => (
            <MenuCategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="mt-8 rounded-md border border-[#a42425]/35 bg-[#151211] p-4 text-sm leading-6 text-[#d9d0c4]">
          <p>Prices and availability may vary. Please check with the café for current details.</p>
          <p className="mt-1">{businessInfo.breakfastLunchNote}</p>
        </div>
      </div>
    </section>
  );
}
