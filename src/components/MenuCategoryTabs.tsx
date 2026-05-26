import type { MenuCategory } from "@/types/menu";

interface MenuCategoryTabsProps {
  categories: MenuCategory[];
  label?: string;
}

export function MenuCategoryTabs({
  categories,
  label = "Menu categories",
}: MenuCategoryTabsProps) {
  return (
    <nav aria-label={label} className="mb-9">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="shrink-0 rounded-full border border-white/15 bg-[#111312] px-4 py-2.5 text-sm font-semibold text-[#e6dfd4] transition-colors hover:border-[#bd3334] hover:bg-[#211113] hover:text-white"
          >
            {category.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
