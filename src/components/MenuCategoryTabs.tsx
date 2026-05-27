import { useRef, type KeyboardEvent, type MouseEvent } from "react";
import type { MenuCategory } from "@/types/menu";

interface MenuCategoryTabsProps {
  categories: MenuCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function MenuCategoryTabs({ categories, selectedId, onSelect }: MenuCategoryTabsProps) {
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  function moveSelection(event: KeyboardEvent<HTMLAnchorElement>, index: number) {
    const lastIndex = categories.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== null) {
      event.preventDefault();
      onSelect(categories[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  function chooseCategory(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    onSelect(id);
  }

  return (
    <div className="sticky top-[4.45rem] z-20 -mx-4 mb-6 border-y border-white/10 bg-[#0d0d0b]/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex snap-x gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Choose a menu category">
        {categories.map((category, index) => {
          const selected = category.id === selectedId;

          return (
            <a
              key={category.id}
              id={`menu-tab-${category.id}`}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              href={`/menu#menu-panel-${category.id}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`menu-panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={(event) => chooseCategory(event, category.id)}
              onKeyDown={(event) => moveSelection(event, index)}
              className={`min-h-12 shrink-0 snap-start rounded-full border px-4 py-3 text-sm font-semibold transition ${
                selected
                  ? "border-[#c63a3c] bg-[#a42425] text-white"
                  : "border-white/15 bg-[#171413] text-[#e4daca] hover:border-white/30"
              }`}
            >
              {category.title}
              {selected ? <span className="sr-only">, selected</span> : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}
