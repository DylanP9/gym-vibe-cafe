import { MenuCategoryCard } from "@/components/MenuCategoryCard";
import { MenuCategoryTabs } from "@/components/MenuCategoryTabs";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";
import { homepageMenuCategories, menuCategories } from "@/data/menu";

interface FullMenuSectionProps {
  full?: boolean;
}

export function FullMenuSection({ full = false }: FullMenuSectionProps) {
  const categories = full ? menuCategories : homepageMenuCategories;

  return (
    <section id="menu" className="section-shell scroll-mt-20" aria-labelledby="menu-heading">
      <div className="content-shell">
        <SectionHeading id="menu-heading" eyebrow={full ? "Full menu" : "Menu preview"} title={full ? "Browse the full menu" : "Choose your vibe"}>
          {full
            ? "Browse the readable menu by category."
            : "Explore a preview of café favourites, nutritional mains and smoothies."}{" "}
          {businessInfo.breakfastLunchNote}
        </SectionHeading>
        <MenuCategoryTabs categories={categories} />
        <div className="grid items-start gap-4 lg:grid-cols-2">
          {categories.map((category) => (
            <MenuCategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-[#a42425]/35 bg-[#151211] p-4 text-sm leading-6 text-[#d9d0c4]">
          <p>Prices and availability may vary. Please check with the café for current details.</p>
          <p className="mt-1">{businessInfo.breakfastLunchNote}</p>
        </div>
        {!full ? (
          <div className="mt-8">
            <ActionLink href="/menu">View every menu category</ActionLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
