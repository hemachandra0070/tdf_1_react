"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/siteContent";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-canvas/85 backdrop-blur-lg">
      <div className="mx-auto flex w-[min(1150px,calc(100%-2rem))] items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0" aria-label="TheDigifac Home">
          <Image src="/tdf_logo_1.png" alt="TheDigifac" width={170} height={62} priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact#book" className="btn-primary hidden sm:inline-flex">
            Book a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex rounded-xl border border-black/15 px-3 py-2 text-sm font-semibold text-ink lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-canvas lg:hidden">
          <nav className="mx-auto flex w-[min(1150px,calc(100%-2rem))] flex-col gap-2 py-4" aria-label="Mobile">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2 py-2 text-sm font-semibold text-ink transition hover:bg-black/5 ${
                    active ? "bg-black/10" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact#book" className="btn-primary mt-2 w-full justify-center" onClick={() => setOpen(false)}>
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
