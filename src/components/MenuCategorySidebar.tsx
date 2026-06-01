import type { MenuCategory } from "@/types/menu";

interface MenuCategorySidebarProps {
  categories: MenuCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function MenuCategorySidebar({ categories, selectedId, onSelect }: MenuCategorySidebarProps) {
  return (
    <nav aria-label="Menu categories" className="hidden lg:block">
      <div className="sticky top-28 rounded-lg border border-white/10 bg-[#0f0f0e] p-3 shadow-2xl shadow-black/20">
        <p className="px-3 pb-3 pt-2 text-xs font-black uppercase tracking-[0.2em] text-[#e33a3f]">Browse menu</p>
        <ul className="space-y-1">
          {categories.map((category) => {
            const selected = category.id === selectedId;

            return (
              <li key={category.id}>
                <a
                  href={`/menu#menu-panel-${category.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelect(category.id);
                  }}
                  aria-current={selected ? "true" : undefined}
                  className={`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-3 text-left text-sm transition ${
                    selected
                      ? "border-[#e33a3f] bg-[#b51f23] font-black text-white shadow-[0_12px_24px_-18px_rgba(181,31,35,0.9)]"
                      : "border-transparent text-[#d9d0c4] hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{category.title}</span>
                  <span className={`text-xs ${selected ? "text-white" : "text-[#897f73]"}`}>{category.items.length}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
