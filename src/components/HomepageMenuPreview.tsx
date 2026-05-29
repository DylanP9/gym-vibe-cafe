import { ActionLink } from "@/components/ActionLink";
import { MenuItemCard } from "@/components/MenuItemCard";
import { SectionHeading } from "@/components/SectionHeading";
import { homepageMenuCategories } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";

export function HomepageMenuPreview() {
  const popular = homepageMenuCategories.find((category) => category.id === "popular-picks");
  const mains = homepageMenuCategories.find((category) => category.id === "nutritional-mains");
  const popularItems = popular?.items.slice(0, 4) ?? [];
  const featuredMains = mains?.items.filter((item) => item.isPopular) ?? [];

  return (
    <section id="menu" className="section-shell scroll-mt-20" aria-labelledby="menu-preview-heading">
      <div className="content-shell">
        <SectionHeading id="menu-preview-heading" eyebrow="Menu highlights" title="Popular Picks">
          Discover classic cafe favourites and selected high-protein mains.
          Browse the full menu for every category.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularItems.map((item) => <MenuItemCard key={item.id} item={item} />)}
        </div>
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d14a4b]">Fuel-focused favourites</p>
          <h3 className="mt-3 text-2xl font-black uppercase text-[#faf6ee]">Nutritional Mains</h3>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featuredMains.map((item) => <MenuItemCard key={item.id} item={item} />)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href={siteConfig.justEatOrderUrl} target="_blank" rel="noopener noreferrer">
            Order now
          </ActionLink>
          <ActionLink href="/menu" variant="secondary">View full menu</ActionLink>
          <ActionLink href="/location" variant="secondary">Plan a visit</ActionLink>
        </div>
      </div>
    </section>
  );
}
