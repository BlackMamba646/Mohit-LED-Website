"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#drone", label: "Drone Screen" },
  { href: "#estimator", label: "Estimate" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(7,7,12,0.85)] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[68px]">
        <a href="#top" className="flex items-center gap-2.5 font-[var(--font-display)] font-extrabold text-xl tracking-[0.1em]" style={{ fontFamily: "var(--font-display)" }}>
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-pink)] via-[var(--color-violet)] to-[var(--color-cyan)] grid grid-cols-3 gap-[2px] p-[5px] shrink-0">
            {[...Array(9)].map((_, i) => (
              <i key={i} className={`bg-white rounded-[1px] ${i % 2 === 0 ? "" : "opacity-40"}`} />
            ))}
          </span>
          LUMORA
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-[var(--color-muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-glow rounded-full px-5 py-2.5 text-sm font-extrabold hidden sm:inline-flex"
          >
            Get a Quote
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-white/[0.06] px-4 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-glow rounded-full px-5 py-3 text-sm font-extrabold mt-3 inline-flex"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
