import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface PageIntroProps {
  current: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}

export function PageIntro({
  current,
  eyebrow,
  title,
  children,
  actions,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-12 sm:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(181,31,35,0.16),transparent_44%),radial-gradient(circle_at_85%_10%,rgba(181,31,35,0.18),transparent_42%)]" />
      <div className="content-shell relative">
        <Breadcrumbs current={current} />
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#e33a3f]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.98] tracking-[-0.045em] text-[#faf6ee] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#cec6b9]">{children}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
