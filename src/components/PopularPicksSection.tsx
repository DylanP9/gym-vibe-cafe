import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { popularPicks } from "@/data/menu";

interface PopularPicksSectionProps {
  showMenuLink?: boolean;
}

export function PopularPicksSection({ showMenuLink = true }: PopularPicksSectionProps) {
  return (
    <section className="section-shell" aria-labelledby="popular-heading">
      <div className="content-shell">
        <SectionHeading id="popular-heading" eyebrow="Menu highlights" title="Popular Picks">
          A quick taste of the classic comfort food and fuel-focused favourites
          on the menu.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularPicks.map((item) => (
            <article key={item.id} className="menu-tile">
              <div className="flex justify-between gap-4">
                <h3 className="text-base font-bold text-[#faf6ee]">{item.name}</h3>
                <p className="shrink-0 text-sm font-bold text-[#efcb9c]">{item.price}</p>
              </div>
              {item.description ? (
                <p className="mt-3 text-sm leading-6 text-[#bfb7ab]">{item.description}</p>
              ) : null}
            </article>
          ))}
        </div>
        {showMenuLink ? (
          <div className="mt-9">
            <ActionLink href="/menu">View full menu</ActionLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
