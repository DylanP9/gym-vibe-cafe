import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070908] pb-24 pt-12 md:pb-12">
      <div className="content-shell grid gap-8 text-sm text-[#cfc7bb] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-black uppercase tracking-wider text-white">{businessInfo.name}</p>
          <p className="mt-3 max-w-xs leading-6">{businessInfo.tagline}</p>
        </div>
        <div>
          <p className="info-label">Visit</p>
          <p className="mt-3 leading-6">{businessInfo.address.full}</p>
          <a className="mt-2 inline-block font-semibold text-white hover:text-[#e25758]" href={businessInfo.phone.href}>
            {businessInfo.phone.display}
          </a>
        </div>
        <div>
          <p className="info-label">Opening hours</p>
          <div className="mt-3">
            {businessInfo.hours.map((hours) => (
              <p key={hours.day} className="leading-6">
                {hours.day}: {hours.display}
              </p>
            ))}
          </div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
          {siteConfig.navigation.slice(0, 4).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
          <a
            href={businessInfo.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </nav>
      </div>
      <p className="content-shell mt-10 border-t border-white/10 pt-6 text-xs text-[#928a7e]">
        {businessInfo.name}. Online checkout is being prepared and is not live yet.
      </p>
      <div className="content-shell mt-6 flex flex-col gap-3 border-t border-white/10 pb-10 pt-6 text-xs text-[#928a7e] sm:flex-row sm:items-center sm:justify-between sm:pb-0">
        <p>Created by Lunamar Digital</p>
        <Image
          src={siteAssets.lunamarDigitalLogo.src}
          alt={siteAssets.lunamarDigitalLogo.alt}
          width={siteAssets.lunamarDigitalLogo.width}
          height={siteAssets.lunamarDigitalLogo.height}
          className="h-12 w-auto self-start sm:self-auto"
        />
      </div>
    </footer>
  );
}
