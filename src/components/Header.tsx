import Image from "next/image";
import logo from "../../Gym Vibe Cafe Logo.jpeg";
import { businessInfo } from "@/data/businessInfo";
import { ActionLink } from "@/components/ActionLink";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090b0a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${businessInfo.name} home`}>
          <Image
            src={logo}
            alt=""
            width={52}
            height={52}
            className="h-12 w-12 rounded-sm object-cover"
            priority
          />
          <span className="truncate text-sm font-black uppercase tracking-[0.16em] text-[#faf6ee] sm:text-base">
            {businessInfo.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a href="#menu" className="text-sm font-semibold text-[#d7d0c6] hover:text-white">
            Menu
          </a>
          <a href="#hours" className="text-sm font-semibold text-[#d7d0c6] hover:text-white">
            Hours
          </a>
          <a href="#location" className="text-sm font-semibold text-[#d7d0c6] hover:text-white">
            Location
          </a>
        </nav>
        <ActionLink href={businessInfo.phone.href} className="shrink-0 px-4">
          Call now
        </ActionLink>
      </div>
    </header>
  );
}
