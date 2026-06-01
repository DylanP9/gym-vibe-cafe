"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

interface MobileNavProps {
  links: readonly NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close mobile navigation" : "Open mobile navigation"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#faf6ee] hover:border-white/30"
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="flex w-4 flex-col gap-1">
          <span className="block h-px bg-current" />
          <span className="block h-px bg-current" />
        </span>
      </button>
      <nav
        id="mobile-navigation"
        hidden={!isOpen}
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-full border-y border-white/10 bg-[#080808] px-4 py-4 shadow-2xl"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-4 text-base font-bold text-[#f1ebe0] hover:bg-white/[0.06]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
