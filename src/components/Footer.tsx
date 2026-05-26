import { businessInfo } from "@/data/businessInfo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070908] pb-24 pt-10 md:pb-10">
      <div className="content-shell grid gap-7 text-sm text-[#cfc7bb] sm:grid-cols-2 lg:grid-cols-4">
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
          <a href="#menu">Menu</a>
          <a href="#hours">Opening hours</a>
          <a
            href={businessInfo.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
