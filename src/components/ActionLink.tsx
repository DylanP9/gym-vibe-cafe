import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

const variantClasses = {
  primary:
    "border-[#e33a3f] bg-[#b51f23] text-white shadow-[0_14px_28px_-16px_rgba(181,31,35,0.9)] hover:border-[#ff5256] hover:bg-[#c9282d]",
  secondary:
    "border-white/22 bg-white/[0.045] text-[#f8f4ec] hover:border-white/40 hover:bg-white/[0.1]",
  quiet:
    "border-transparent bg-transparent text-[#f8f4ec] underline decoration-[#b51f23] underline-offset-4 hover:text-white",
};

export function ActionLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-sm font-black uppercase tracking-[0.12em] transition-all active:translate-y-px ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
