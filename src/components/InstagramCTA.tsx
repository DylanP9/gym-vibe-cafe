import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";

export function InstagramCTA() {
  return (
    <section className="section-shell pt-4" aria-labelledby="instagram-heading">
      <div className="content-shell">
        <div className="overflow-hidden rounded-2xl border border-[#a42425]/40 bg-[radial-gradient(circle_at_90%_0%,rgba(164,36,37,0.32),transparent_42%),linear-gradient(125deg,#151514,#1e1112)] p-7 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#df5556]">
            Updates on Instagram
          </p>
          <h2 id="instagram-heading" className="mt-4 max-w-xl text-3xl font-black uppercase tracking-tight text-[#faf6ee] sm:text-5xl">
            Follow {businessInfo.instagram.handle}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#d2cabd]">
            Follow the café on Instagram for updates and menu news.
          </p>
          <ActionLink href={businessInfo.instagram.url} target="_blank" rel="noopener noreferrer" className="mt-8">
            Follow Instagram
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
