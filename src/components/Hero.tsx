"use client";

import dynamic from "next/dynamic";
import AnimateIn from "./AnimateIn";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(123,92,255,0.12)] via-transparent to-[rgba(255,46,136,0.08)]" />
  ),
});

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(800px 500px at 75% 40%, rgba(123,92,255,0.2), transparent 70%), radial-gradient(600px 420px at 10% 80%, rgba(255,46,136,0.15), transparent 70%), var(--color-bg)",
      }}
    >
      <HeroScene />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[rgba(7,7,12,0.92)] via-[rgba(7,7,12,0.5)] to-transparent" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-4 py-28 md:py-36">
        <div className="max-w-[600px] flex flex-col gap-6">
          <AnimateIn delay={0.1}>
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)]">
              LED Screens on Rent &middot; Ludhiana &amp; Punjab
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1
              className="text-[clamp(42px,7vw,82px)] font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Make every moment{" "}
              <span className="grad-text">unforgettable.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-[clamp(16px,1.6vw,19px)] text-[#d3d2ea] max-w-[520px]">
              A 9.8 &times; 19.7 ft LED screen flown by drones, plus LED TVs,
              LED bags, DJ consoles &amp; LED vans — delivered, set up and run
              by our crew for your wedding, launch or event.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-glow rounded-full px-7 py-3.5 text-[15px] font-extrabold inline-flex items-center gap-2"
              >
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#drone"
                className="btn-ghost rounded-full px-6 py-3.5 text-[15px] font-extrabold inline-flex"
              >
                See the Drone Screen
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { big: "9.8 × 19.7 ft", small: "drone screen" },
                { big: "P20", small: "outdoor LED" },
                { big: "~25 min", small: "flight time" },
              ].map((c) => (
                <div
                  key={c.big}
                  className="flex flex-col px-4 py-3 rounded-[14px] bg-[rgba(18,18,29,0.72)] border border-[var(--color-line2)] backdrop-blur-md"
                >
                  <span className="font-extrabold text-lg tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                    {c.big}
                  </span>
                  <span className="text-xs text-[var(--color-muted)] font-semibold">{c.small}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </header>
  );
}
