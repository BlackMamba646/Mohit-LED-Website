"use client";

import AnimateIn from "./AnimateIn";

const specs = [
  { dt: "Screen size", dd: "3 m (W) × 6 m (H) · custom sizes available" },
  { dt: "LED type", dd: "High-brightness outdoor LED" },
  { dt: "Pixel pitch", dd: "P20" },
  { dt: "Resolution", dd: "150 × 300 px (approx.)" },
  { dt: "Brightness", dd: "≥ 5,000 cd/m² (daylight visible)" },
  { dt: "Flight time", dd: "~25 min first flight; ~20 min per battery change" },
  { dt: "Operating mode", dd: "Wireless content control" },
  { dt: "Environment", dd: "Day & night · outdoor events" },
  { dt: "Safety", dd: "Stabilised flight, safety cables, emergency landing" },
];

const idealFor = [
  "Weddings", "Concerts", "Brand Launches", "Exhibitions",
  "Sports Events", "Festivals", "Government Campaigns", "Outdoor Advertising",
];

export default function DroneSection() {
  return (
    <section
      id="drone"
      className="py-20 md:py-28 bg-[var(--color-bg2)] border-y border-[var(--color-line)]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Our Hero Product
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Drone <span className="grad-text">LED Screen.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[520px] mb-10">
            Your names, logo or countdown on a giant screen above the venue — the
            shot every guest films and shares.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: visual + size */}
          <AnimateIn direction="left">
            <div className="space-y-5">
              {/* Animated drone screen visual */}
              <div className="relative h-[380px] rounded-2xl overflow-hidden border border-[var(--color-line)] bg-[#05050a] flex items-center justify-center">
                <div className="relative" style={{ animation: "float 4s ease-in-out infinite" }}>
                  {/* Screen */}
                  <div
                    className="w-[140px] h-[260px] rounded-md relative"
                    style={{
                      background: "linear-gradient(160deg, #ff2e88, #7b5cff 50%, #18e0ff)",
                      backgroundSize: "100% 300%",
                      animation: "led-pulse 3s ease-in-out infinite",
                      boxShadow: "0 0 80px -10px rgba(123,92,255,0.7), 0 0 160px -20px rgba(255,46,136,0.3)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xl text-center leading-tight" style={{ fontFamily: "var(--font-display)", textShadow: "0 0 20px rgba(0,0,0,0.5)" }}>
                      YOUR<br/>NAME<br/>HERE
                    </div>
                  </div>
                  {/* Top bar */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[180px] h-[6px] rounded-full bg-[rgba(255,255,255,0.2)]" />
                  {/* Cables */}
                  <div className="absolute -top-8 left-3 w-[1px] h-6 bg-[#5a5a7a]" />
                  <div className="absolute -top-8 right-3 w-[1px] h-6 bg-[#5a5a7a]" />
                  {/* Drone indicators */}
                  <div className="absolute -top-10 -left-6 w-3 h-3 rounded-full bg-[#ff3355] shadow-[0_0_8px_#ff3355]" />
                  <div className="absolute -top-10 -right-6 w-3 h-3 rounded-full bg-[#33ff88] shadow-[0_0_8px_#33ff88]" />
                </div>
                {/* Ground glow */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-[60px] bg-gradient-to-t from-[rgba(123,92,255,0.25)] to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs font-bold text-[var(--color-muted)] bg-[rgba(7,7,12,0.7)] px-3 py-1 rounded-full">
                  Weddings · your names in the sky
                </p>
              </div>

              {/* Size + scale */}
              <div className="grid grid-cols-[1fr_160px] gap-4 max-sm:grid-cols-1">
                <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-line)] p-5 flex flex-col gap-1">
                  <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)]">Screen size</span>
                  <span className="grad-text text-[clamp(28px,3.4vw,38px)] font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                    9.8 × 19.7 ft
                  </span>
                  <span className="text-sm text-[var(--color-muted)] font-semibold">3 m wide × 6 m high · ~194 sq ft</span>
                </div>
                <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-line)] p-4 flex items-end justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-20 rounded-sm" style={{ background: "linear-gradient(160deg, #ff2e88, #7b5cff, #18e0ff)" }} />
                    <span className="text-[11px] text-[var(--color-dim)] font-bold mt-1">19.7 ft</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-6 rounded-full bg-[var(--color-muted)]" />
                    <span className="text-[11px] text-[var(--color-dim)] font-bold mt-1">6 ft</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {idealFor.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-[var(--color-card)] border border-[var(--color-line)] text-sm font-bold text-[#d3d2ea]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right: specs + pricing */}
          <AnimateIn direction="right">
            <div className="space-y-5">
              {/* Specs table */}
              <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] overflow-hidden">
                <div className="px-5 py-3 bg-[#0b0b14] text-sm font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                  Technical Specifications
                </div>
                <dl className="grid grid-cols-[140px_1fr] max-sm:grid-cols-[110px_1fr]">
                  {specs.map((s) => (
                    <div key={s.dt} className="contents">
                      <dt className="px-5 py-3 border-t border-[var(--color-line)] text-sm text-[var(--color-muted)] font-bold">
                        {s.dt}
                      </dt>
                      <dd className="px-5 py-3 border-t border-[var(--color-line)] text-sm font-bold">
                        {s.dd}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="rounded-2xl p-5 bg-[var(--color-card)] border-2 border-transparent flex flex-col gap-1" style={{ background: "linear-gradient(var(--color-card), var(--color-card)) padding-box, linear-gradient(100deg, #ff2e88, #7b5cff, #18e0ff) border-box" }}>
                  <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-muted)]">Direct clients</span>
                  <span className="text-3xl font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>₹1,30,000</span>
                  <span className="text-sm text-[var(--color-muted)] font-semibold">per event</span>
                </div>
                <div className="rounded-2xl p-5 bg-[var(--color-card)] border border-[var(--color-line)] flex flex-col gap-1">
                  <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-muted)]">Event companies</span>
                  <span className="text-3xl font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>₹1,10,000</span>
                  <span className="text-sm text-[var(--color-muted)] font-semibold">per event · trade rate</span>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 rounded-xl bg-[var(--color-bg2)] border border-[var(--color-line)] text-sm text-[var(--color-muted)]">
                <strong className="text-[var(--color-ink)]">Payment:</strong> 50% to book, balance 50%
                within 10 days of the event. GST @18% and transport extra.{" "}
                <strong className="text-[var(--color-ink)]">Content tip:</strong> P20 shows bold logos,
                names and large text best.
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
