"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

export default function VansSection() {
  const [big, setBig] = useState(true);

  return (
    <section id="vans" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Product 05
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LED <span className="grad-text">Vans.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[520px] mb-10">
            Moving billboards for brand campaigns, launches, real-estate promotions
            and awareness drives.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D Van */}
          <AnimateIn direction="left">
            <div
              className="h-[400px] rounded-2xl border border-[var(--color-line)] overflow-hidden flex items-center justify-center"
              style={{
                perspective: "1200px",
                background: "radial-gradient(500px 240px at 50% 70%, rgba(24,224,255,0.12), transparent 70%), #05050a",
              }}
            >
              <div className="animate-spin" style={{ animationDuration: "16s", transformStyle: "preserve-3d", transform: "rotateX(-14deg)" }}>
                <div className="relative" style={{ transformStyle: "preserve-3d", width: big ? "220px" : "160px", height: big ? "110px" : "80px", transition: "all 0.5s" }}>
                  {/* Front face */}
                  <div
                    className="absolute inset-0 p-2.5 bg-[#24243a] flex items-center justify-center"
                    style={{ transform: `translateZ(${big ? 50 : 40}px)` }}
                  >
                    <div
                      className="w-full h-full rounded flex items-center justify-center font-extrabold text-white text-sm"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(100deg, #ff2e88, #7b5cff, #18e0ff)",
                        backgroundSize: "300% 100%",
                        animation: "marquee-scroll 6s linear infinite",
                        textShadow: "0 0 14px rgba(0,0,0,0.35)",
                      }}
                    >
                      {big ? "8 × 12 ft" : "6 × 4 ft"}
                    </div>
                  </div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 p-2.5 bg-[#24243a] flex items-center justify-center"
                    style={{ transform: `rotateY(180deg) translateZ(${big ? 50 : 40}px)` }}
                  >
                    <div
                      className="w-full h-full rounded flex items-center justify-center font-extrabold text-white text-sm"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(100deg, #18e0ff, #7b5cff, #ff2e88)",
                        backgroundSize: "300% 100%",
                        animation: "marquee-scroll 6s linear infinite",
                      }}
                    >
                      YOUR AD
                    </div>
                  </div>
                  {/* Side faces */}
                  <div
                    className="absolute bg-[#1c1c2c]"
                    style={{
                      width: `${big ? 100 : 80}px`,
                      height: "100%",
                      left: "50%",
                      transform: `translateX(-50%) rotateY(90deg) translateZ(${(big ? 220 : 160) / 2}px)`,
                    }}
                  />
                  {/* Top */}
                  <div
                    className="absolute bg-[#2b2b40]"
                    style={{
                      width: "100%",
                      height: `${big ? 100 : 80}px`,
                      top: "50%",
                      transform: `translateY(-50%) rotateX(90deg) translateZ(${(big ? 110 : 80) / 2}px)`,
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-8 w-[40%] h-6 rounded-full bg-gradient-radial from-[rgba(24,224,255,0.3)] to-transparent" style={{ background: "radial-gradient(rgba(24,224,255,0.3), transparent 70%)" }} />
            </div>
          </AnimateIn>

          {/* Details */}
          <AnimateIn direction="right">
            <div>
              <div className="flex gap-2 mb-5">
                <button
                  onClick={() => setBig(false)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl border font-extrabold text-sm transition-all ${
                    !big
                      ? "bg-gradient-to-r from-[var(--color-pink)] via-[var(--color-violet)] to-[var(--color-cyan)] border-transparent text-white"
                      : "bg-[var(--color-card)] border-[var(--color-line2)] text-[var(--color-ink)] hover:border-[var(--color-violet)]"
                  }`}
                >
                  Small van
                </button>
                <button
                  onClick={() => setBig(true)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl border font-extrabold text-sm transition-all ${
                    big
                      ? "bg-gradient-to-r from-[var(--color-pink)] via-[var(--color-violet)] to-[var(--color-cyan)] border-transparent text-white"
                      : "bg-[var(--color-card)] border-[var(--color-line2)] text-[var(--color-ink)] hover:border-[var(--color-violet)]"
                  }`}
                >
                  Big van
                </button>
              </div>

              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[40px] font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                  {big ? "₹40,000" : "₹18,000"}
                </span>
                <span className="text-[var(--color-muted)] font-bold">per day</span>
              </div>

              <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-[15px] mt-4">
                <dt className="text-[var(--color-muted)] font-bold">LED screen</dt>
                <dd className="font-bold">{big ? "8 × 12 ft" : "6 × 4 ft, one side"}</dd>
                <dt className="text-[var(--color-muted)] font-bold">Minimum</dt>
                <dd className="font-bold">10 days</dd>
                <dt className="text-[var(--color-muted)] font-bold">Min. booking</dt>
                <dd className="font-bold tabular-nums">{big ? "₹4,00,000" : "₹1,80,000"}</dd>
                <dt className="text-[var(--color-muted)] font-bold">Client provides</dt>
                <dd className="font-bold">Fuel, generator diesel, ad & traffic permissions</dd>
                <dt className="text-[var(--color-muted)] font-bold">Payment</dt>
                <dd className="font-bold">50% to book, 50% at least 10 days before campaign</dd>
              </dl>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
