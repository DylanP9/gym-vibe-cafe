import { SectionHeading } from "@/components/SectionHeading";

const gallerySlots = [
  { title: "Signature dishes", detail: "Approved real food photography" },
  { title: "Cafe interior", detail: "Approved interior photo" },
  { title: "Cafe exterior", detail: "Visitor-facing exterior photo" },
  { title: "Smoothies & drinks", detail: "Real drinks photography" },
  { title: "Brand details", detail: "Counter, logo or menu-board detail" },
];

export function GalleryPlaceholderSection() {
  return (
    <section className="section-shell section-divider bg-[#111312]" aria-labelledby="gallery-heading">
      <div className="content-shell">
        <SectionHeading id="gallery-heading" eyebrow="Gallery ready" title="Photography spaces prepared">
          Genuine cafe and food photography will be added here when approved
          images are supplied. No stock or invented food photos are used.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {gallerySlots.map((slot, index) => (
            <div
              key={slot.title}
              className="relative flex min-h-48 overflow-hidden rounded-xl border border-dashed border-white/18 bg-[linear-gradient(145deg,#171312,#0b0d0c)] p-4 shadow-[0_16px_35px_-32px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(164,36,37,0.24),transparent_31%)]" />
              <div className="relative flex w-full flex-col justify-between">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#e25758]">
                  Slot {index + 1}
                </span>
                <div>
                  <div className="mb-4 h-10 w-10 rounded-full border border-[#a42425]/45 bg-white/[0.035]" />
                  <p className="font-bold text-[#f4efe6]">{slot.title}</p>
                  <p className="mt-2 text-xs leading-5 text-[#aaa194]">{slot.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
