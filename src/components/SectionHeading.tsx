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
    <div className={`mb-9 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d14a4b]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-black uppercase leading-tight tracking-[-0.035em] text-[#faf6ee] sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-7 text-[#cfc8bb] sm:text-lg">{children}</p>
      ) : null}
    </div>
  );
}
