import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-9 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#e33a3f]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-black uppercase leading-[0.98] tracking-[-0.04em] text-[#faf6ee] sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-7 text-[#cfc8bb] sm:text-lg">{children}</p>
      ) : null}
    </div>
  );
}
