import { ActionLink } from "@/components/ActionLink";
import { MenuItemCard } from "@/components/MenuItemCard";
import { SectionHeading } from "@/components/SectionHeading";
import { homepageMenuCategories } from "@/data/menu";

export function HomepageMenuPreview() {
  const popular = homepageMenuCategories.find((category) => category.id === "popular-picks");
  const mains = homepageMenuCategories.find((category) => category.id === "nutritional-mains");
  const popularItems = popular?.items.slice(0, 4) ?? [];
  const featuredMains = mains?.items.filter((item) => item.isPopular) ?? [];

  return (
    <section id="menu" className="section-shell scroll-mt-20" aria-labelledby="menu-preview-heading">
      <div className="content-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <SectionHeading id="menu-preview-heading" eyebrow="Menu highlights" title="Breakfast rolls, Scottish plates and protein mains">
            A practical cafe menu for people heading to work, training nearby, or
            grabbing lunch in Kinning Park.
          </SectionHeading>
          <div className="mb-9 rounded-lg border border-[#b51f23]/45 bg-[#150f0f] p-5 text-sm leading-6 text-[#e7d9c8]">
            Prices and availability should be checked with the cafe. The website
            menu is based on supplied menu-board details and is not a live stock
            system.
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularItems.map((item) => <MenuItemCard key={item.id} item={item} />)}
        </div>
        <div className="mt-12 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e33a3f]">High-protein meals</p>
          <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.035em] text-[#faf6ee] sm:text-5xl">
            Proper lunch with clear macros where supplied.
          </h3>
          <p className="mt-4 text-base leading-7 text-[#cfc8bb]">
            Chicken pasta, rice bowls, mac and cheese and other high-protein
            mains. Macro numbers are shown only where they were supplied.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featuredMains.map((item) => <MenuItemCard key={item.id} item={item} />)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href="/menu">View full menu</ActionLink>
          <ActionLink href="/location" variant="secondary">Get directions</ActionLink>
        </div>
      </div>
    </section>
  );
}
