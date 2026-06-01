"use client";

import { useEffect, useState } from "react";
import { MenuCategoryPanel } from "@/components/MenuCategoryPanel";
import { MenuCategorySidebar } from "@/components/MenuCategorySidebar";
import { MenuCategoryTabs } from "@/components/MenuCategoryTabs";
import { menuCategories } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";

export function MenuBrowser() {
  const [selectedId, setSelectedId] = useState(menuCategories[0].id);
  const category =
    menuCategories.find((menuCategory) => menuCategory.id === selectedId) ??
    menuCategories[0];

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
        <div className="mb-8 grid gap-4 rounded-lg border border-[#b51f23]/40 bg-[#150f0f] p-5 text-sm leading-6 text-[#d9d0c4] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">
              Menu note
            </p>
            <p className="mt-2">
              In-store prices are based on supplied cafe menu-board artwork.
              Delivery-platform prices may differ.
            </p>
            <p className="mt-2">
              Prices and availability may vary. Please check with the cafe for
              the latest information.
            </p>
          </div>
          <div className="rounded-md border border-[#df9b50]/45 bg-[#211516] p-4 text-[#f1d8bc]">
            <p className="font-bold text-white">Square checkout is not live.</p>
            <p className="mt-1">
              In-site payments are being prepared and are not available yet.
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href={siteConfig.justEatOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#e33a3f] bg-[#b51f23] px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-white hover:border-[#ff5256] hover:bg-[#c9282d]"
          >
            Just Eat menu
          </a>
          <a
            href="/location"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white/[0.045] px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#f8f4ec] hover:border-white/35 hover:bg-white/[0.09]"
          >
            Visit the cafe
          </a>
        </div>
        <MenuCategoryTabs
          categories={menuCategories}
          selectedId={selectedId}
          onSelect={selectCategory}
        />
        <div className="grid items-start gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <MenuCategorySidebar
            categories={menuCategories}
            selectedId={selectedId}
            onSelect={selectCategory}
          />
          <div>
            <MenuCategoryPanel category={category} />
          </div>
        </div>
      </div>
    </section>
  );
}
