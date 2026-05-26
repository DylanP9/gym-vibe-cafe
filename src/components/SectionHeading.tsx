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
    <div className={`mb-8 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#cf3b3c]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-black uppercase tracking-tight text-[#faf6ee] sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-[#ccc4b9]">{children}</p>
      ) : null}
    </div>
  );
}
