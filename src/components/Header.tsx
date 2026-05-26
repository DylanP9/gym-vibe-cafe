import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ActionLink";
import { MobileNav } from "@/components/MobileNav";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090b0a]/90 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${businessInfo.name} home`}>
          <Image
            src={siteAssets.logo.src}
            alt=""
            width={52}
            height={52}
            className="h-12 w-12 rounded-sm object-cover"
            priority
          />
          <span className="truncate text-sm font-black uppercase tracking-[0.16em] text-[#faf6ee] sm:text-base">
            {businessInfo.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {siteConfig.navigation.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-[#d7d0c6] hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ActionLink href={businessInfo.phone.href} className="shrink-0 px-5">
            Call now
          </ActionLink>
        </div>
        <MobileNav links={siteConfig.navigation} />
      </div>
    </header>
  );
}
