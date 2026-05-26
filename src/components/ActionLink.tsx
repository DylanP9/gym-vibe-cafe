import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

const variantClasses = {
  primary:
    "border-[#ba3032] bg-[#a42425] text-white shadow-[0_14px_28px_-14px_rgba(164,36,37,0.85)] hover:border-[#cc3e40] hover:bg-[#b92c2e]",
  secondary:
    "border-white/20 bg-white/[0.035] text-[#f8f4ec] hover:border-white/35 hover:bg-white/[0.09]",
  quiet:
    "border-transparent bg-transparent text-[#f8f4ec] underline decoration-[#a42425] underline-offset-4 hover:text-white",
};

export function ActionLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-all ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
