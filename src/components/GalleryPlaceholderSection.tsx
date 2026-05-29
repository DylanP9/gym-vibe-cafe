import { SectionHeading } from "@/components/SectionHeading";

const gallerySlots = [
  { title: "Signature dishes", detail: "Space reserved for approved real food photography" },
  { title: "Cafe interior", detail: "Space reserved for an approved interior photo" },
  { title: "Cafe exterior", detail: "Space reserved for a visitor-facing exterior photo" },
  { title: "Smoothies & drinks", detail: "Space reserved for real drinks photography" },
  { title: "Brand details", detail: "Space reserved for counter, logo or menu-board detail" },
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
              className="flex min-h-44 flex-col justify-between rounded-xl border border-dashed border-white/18 bg-[linear-gradient(145deg,#171312,#0b0d0c)] p-4 shadow-[0_16px_35px_-32px_rgba(0,0,0,0.8)]"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a42425]">
                Slot {index + 1}
              </span>
              <div>
                <p className="font-bold text-[#f4efe6]">{slot.title}</p>
                <p className="mt-2 text-xs leading-5 text-[#aaa194]">{slot.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
