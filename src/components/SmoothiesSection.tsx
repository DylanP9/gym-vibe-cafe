import { SectionHeading } from "@/components/SectionHeading";
import { menuCategories } from "@/data/menu";

export function SmoothiesSection() {
  const smoothies = menuCategories.find((category) => category.id === "smoothies");

  if (!smoothies) {
    return null;
  }

  return (
    <section className="section-shell" aria-labelledby="smoothies-heading">
      <div className="content-shell">
        <SectionHeading id="smoothies-heading" eyebrow="Fresh frozen fruit" title="Smoothies">
          Pick a fruit smoothie for £3.95, with protein and chia seeds available
          as an optional add-on for £1.50.
        </SectionHeading>
        <div className="flex flex-wrap gap-3">
          {smoothies.items.map((item) => (
            <div key={item.id} className="rounded-full border border-[#a42425]/55 bg-[#111312] px-5 py-3 text-sm font-semibold text-[#f3ede4]">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
