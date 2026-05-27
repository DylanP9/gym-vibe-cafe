"use client";

import { useEffect, useState } from "react";
import { MenuCategoryPanel } from "@/components/MenuCategoryPanel";
import { MenuCategorySidebar } from "@/components/MenuCategorySidebar";
import { MenuCategoryTabs } from "@/components/MenuCategoryTabs";
import { menuCategories } from "@/data/menu";

export function MenuBrowser() {
  const [selectedId, setSelectedId] = useState(menuCategories[0].id);
  const category = menuCategories.find((menuCategory) => menuCategory.id === selectedId) ?? menuCategories[0];

  useEffect(() => {
    function selectFromHash() {
      const categoryId = window.location.hash.replace("#menu-panel-", "");

      if (menuCategories.some((menuCategory) => menuCategory.id === categoryId)) {
        setSelectedId(categoryId);
      }
    }

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);

    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  function selectCategory(id: string) {
    setSelectedId(id);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#menu-panel-${id}`,
    );
  }

  return (
    <section className="section-shell" aria-label="Browse the menu">
      <div className="content-shell">
        <div className="mb-8 rounded-xl border border-[#a42425]/35 bg-[#151211] p-4 text-sm leading-6 text-[#d9d0c4]">
          <p>In-store prices are based on supplied café menu-board artwork. Delivery-platform prices may differ.</p>
          <p className="mt-2">Prices and availability may vary. Please check with the café for the latest information.</p>
          <p className="mt-2 font-semibold text-[#efcb9c]">Browse only. Ordering and payment are handled separately outside this website.</p>
        </div>
        <MenuCategoryTabs categories={menuCategories} selectedId={selectedId} onSelect={selectCategory} />
        <div className="grid items-start gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <MenuCategorySidebar categories={menuCategories} selectedId={selectedId} onSelect={selectCategory} />
          <MenuCategoryPanel category={category} />
        </div>
      </div>
    </section>
  );
}
