import { SectionHeading } from "@/components/SectionHeading";
import { highProteinFeatureItems } from "@/data/menu";

export function HighProteinSection() {
  return (
    <section className="section-shell bg-[#121613]" aria-labelledby="protein-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <SectionHeading id="protein-heading" eyebrow="Fuel favourites" title="High-protein picks">
          Clearly marked high-protein choices from the menu for breakfast or a
          convenient bite during the day.
        </SectionHeading>
        <div className="grid gap-3">
          {highProteinFeatureItems.map((item) => (
            <article key={item.id} className="flex items-center justify-between gap-5 rounded-lg border border-[#377b54]/45 bg-[#0b100d] p-4">
              <h3 className="text-sm font-bold text-[#f6f1e9] sm:text-base">{item.name}</h3>
              <p className="shrink-0 font-bold text-[#e9ddca]">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
