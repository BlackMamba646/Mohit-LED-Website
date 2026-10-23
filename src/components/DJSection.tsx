"use client";

import AnimateIn from "./AnimateIn";

export default function DJSection() {
  return (
    <section
      id="dj"
      className="py-20 md:py-28 bg-[var(--color-bg2)] border-y border-[var(--color-line)]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* DJ console visual */}
          <AnimateIn direction="left">
            <div className="h-[380px] rounded-2xl border border-[var(--color-line)] bg-[#05050a] flex items-center justify-center overflow-hidden relative">
              <div className="relative">
                {/* Console body */}
                <div
                  className="w-[280px] h-[100px] rounded-[16px_16px_8px_8px] border-t-[10px] border-[#1a1a28]"
                  style={{
                    background: "linear-gradient(100deg, #18e0ff, #7b5cff 50%, #ff2e88)",
                    backgroundSize: "300% 100%",
                    animation: "marquee-scroll 5s linear infinite",
                    boxShadow: "0 0 80px -10px var(--color-cyan), 0 20px 60px -20px rgba(123,92,255,0.5)",
                  }}
                />
                {/* Turntables */}
                <div className="absolute top-[20px] left-[30px] w-[50px] h-[50px] rounded-full bg-[#0a0a12] border-2 border-[#3a3a52]">
                  <div className="absolute inset-2 rounded-full border border-[#5a5a7a] animate-spin" style={{ animationDuration: "4s" }} />
                </div>
                <div className="absolute top-[20px] right-[30px] w-[50px] h-[50px] rounded-full bg-[#0a0a12] border-2 border-[#3a3a52]">
                  <div className="absolute inset-2 rounded-full border border-[#5a5a7a] animate-spin" style={{ animationDuration: "3s" }} />
                </div>
                {/* Mixer center */}
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded bg-[#0a0a12]" />
              </div>
              {/* Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(24,224,255,0.15)] to-transparent" />
            </div>
          </AnimateIn>

          {/* Copy */}
          <AnimateIn direction="right">
            <div className="flex flex-col gap-5">
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)]">
                Product 04
              </p>
              <h2
                className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LED <span className="grad-text">DJ Console.</span>
              </h2>
              <p className="text-[var(--color-muted)]">
                A curved console wrapped in a full-colour LED screen. It plays
                visuals, logos or the couple&apos;s names behind the DJ — a centrepiece
                for sangeets, parties and brand launches.
              </p>

              <div
                className="max-w-[360px] rounded-2xl p-5 bg-[var(--color-card)] border-2 border-transparent flex flex-col gap-1"
                style={{
                  background: "linear-gradient(var(--color-card), var(--color-card)) padding-box, linear-gradient(100deg, #ff2e88, #7b5cff, #18e0ff) border-box",
                }}
              >
                <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-muted)]">Rental</span>
                <span className="text-3xl font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>₹15,000</span>
                <span className="text-sm text-[var(--color-muted)] font-semibold">per day · 100% in advance · GST extra</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
