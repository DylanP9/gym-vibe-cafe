import { SectionHeading } from "@/components/SectionHeading";

const gallerySlots = [
  { title: "Signature dishes", detail: "Real food photography required" },
  { title: "Café interior", detail: "Approved interior photo required" },
  { title: "Café exterior", detail: "Visitor-facing exterior photo required" },
  { title: "Smoothies & drinks", detail: "Real drinks photography required" },
  { title: "Brand details", detail: "Menu board or counter detail photo" },
];

export function GalleryPlaceholderSection() {
  return (
    <section className="section-shell section-divider bg-[#111312]" aria-labelledby="gallery-heading">
      <div className="content-shell">
        <SectionHeading id="gallery-heading" eyebrow="Gallery coming soon" title="A look inside Gym Vibe">
          Genuine café and food photography will be added here when approved
          images are supplied.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {gallerySlots.map((slot) => (
            <div key={slot.title} className="flex min-h-40 flex-col justify-end rounded-xl border border-dashed border-white/15 bg-[linear-gradient(145deg,#131514,#0c0e0d)] p-4">
              <p className="font-bold text-[#f4efe6]">{slot.title}</p>
              <p className="mt-2 text-xs leading-5 text-[#aaa194]">{slot.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
