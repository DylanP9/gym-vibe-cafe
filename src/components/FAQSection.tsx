import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section id="faq" className="section-shell scroll-mt-24" aria-labelledby="faq-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[0.7fr_1fr]">
        <SectionHeading id="faq-heading" eyebrow="Quick answers" title="Frequently asked questions">
          Useful visit information based on the supplied cafe details.
        </SectionHeading>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.id} className="group rounded-xl border border-white/10 bg-[#111312] p-5 open:border-[#a42425]/50">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-[#f5f0e7] marker:hidden">
                <span>{faq.question}</span>
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#d14a4b] transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-[#ccc4b8]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
