import { businessInfo } from "@/data/businessInfo";

export function StickyMobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/15 bg-[#090b0a] p-2 md:hidden"
    >
      <a href={businessInfo.phone.href} className="mobile-action">
        Call
      </a>
      <a
        href={businessInfo.maps.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action border-x border-white/10"
      >
        Directions
      </a>
      <a
        href={businessInfo.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action"
      >
        Instagram
      </a>
    </nav>
  );
}
