import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section className="section-shell bg-[#111312]" aria-labelledby="about-heading">
      <div className="content-shell grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
        <SectionHeading id="about-heading" eyebrow="The café" title="Food that fits your day">
          Gym Vibe Café brings a proper local café menu together with
          high-protein breakfast choices, nutritional mains and fruit smoothies.
        </SectionHeading>
        <div className="rounded-lg border border-[#a42425]/40 bg-[#090b0a] p-6">
          <p className="text-xl font-black uppercase leading-snug text-[#faf6ee]">
            Breakfast, lunch, coffee and post-training fuel.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#ccc4b9]">
            Drop in for Scottish breakfast favourites, a quick filled roll, a
            filling main or a smoothie in Kinning Park.
          </p>
        </div>
      </div>
    </section>
  );
}
