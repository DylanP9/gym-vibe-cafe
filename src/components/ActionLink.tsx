import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

const variantClasses = {
  primary:
    "bg-[#a42425] text-white hover:bg-[#c13132] border-[#a42425]",
  secondary:
    "bg-transparent text-[#f8f4ec] hover:bg-white/10 border-white/25",
  quiet:
    "bg-transparent text-[#f8f4ec] hover:text-white border-transparent underline decoration-[#a42425] underline-offset-4",
};

export function ActionLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
