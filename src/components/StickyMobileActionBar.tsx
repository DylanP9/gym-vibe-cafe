import { businessInfo } from "@/data/businessInfo";

export function StickyMobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-white/15 bg-[#050505]/98 p-2 shadow-[0_-16px_30px_rgba(0,0,0,0.28)] md:hidden"
    >
      <a
        href="/menu"
        aria-label={`View the ${businessInfo.name} menu`}
        className="mobile-action border-r border-white/10"
      >
        Menu
      </a>
      <a href={businessInfo.phone.href} aria-label={`Call ${businessInfo.name} on ${businessInfo.phone.display}`} className="mobile-action">
        Call
      </a>
      <a
        href={businessInfo.maps.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get directions to ${businessInfo.name}`}
        className="mobile-action border-x border-white/10"
      >
        Directions
      </a>
      <a
        href={businessInfo.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Follow ${businessInfo.name} on Instagram`}
        className="mobile-action"
      >
        Instagram
      </a>
    </nav>
  );
}
