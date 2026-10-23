"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const tvs = [
  { size: 43, price: 3000, use: "Tabletops, kiosks" },
  { size: 50, price: 4000, use: "Desks, small lobbies" },
  { size: 55, price: 5000, use: "Presentations, lobbies, photo booths" },
  { size: 65, price: 7000, use: "Stages, conferences" },
  { size: 75, price: 12000, use: "Large halls, events" },
  { size: 85, price: 18000, use: "Auditoriums, venues" },
  { size: 98, price: 25000, use: "Grand entrances, large stages" },
  { size: 100, price: 30000, use: "Flagship events, exhibitions" },
];

function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function TVsSection() {
  const [selected, setSelected] = useState(2);
  const tv = tvs[selected];

  return (
    <section id="tvs" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Product 02
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LED TVs <span className="grad-text">& stands.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[460px] mb-10">
            Pick a size to see pricing. Every TV is rented with a floor stand.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D-ish TV preview */}
          <AnimateIn direction="left">
            <div
              className="h-[400px] rounded-2xl border border-[var(--color-line)] flex items-end justify-center overflow-hidden pb-10"
              style={{
                perspective: "1100px",
                background: "radial-gradient(500px 260px at 50% 30%, rgba(123,92,255,0.2), transparent 70%), #05050a",
              }}
            >
              <div
                className="flex flex-col items-center transition-transform duration-500"
                style={{ transformStyle: "preserve-3d", transform: "rotateY(-12deg) rotateX(4deg)" }}
              >
                <div
                  className="relative rounded-lg border-[8px] border-[#1e1e2c] flex items-center justify-center transition-all duration-500"
                  style={{
                    width: `${Math.min(80 + tv.size * 2.5, 340)}px`,
                    aspectRatio: "16/9",
                    background: "radial-gradient(circle at 30% 30%, #18e0ff, #7b5cff 55%, #1b0b3f)",
                    boxShadow: "0 0 90px -10px rgba(123,92,255,0.6)",
                  }}
                >
                  <span className="font-extrabold text-2xl text-white" style={{ fontFamily: "var(--font-display)", textShadow: "0 0 18px rgba(255,255,255,0.5)" }}>
                    {tv.size}&quot;
                  </span>
                </div>
                <div className="w-2 h-[70px] bg-[#2e2e44]" />
                <div className="w-40 h-2.5 rounded-full bg-[#2e2e44]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[rgba(123,92,255,0.12)] to-transparent" />
            </div>
          </AnimateIn>

          {/* Details */}
          <AnimateIn direction="right">
            <div>
              {/* Size picker */}
              <div className="flex flex-wrap gap-2 mb-5">
                {tvs.map((t, i) => (
                  <button
                    key={t.size}
                    onClick={() => setSelected(i)}
                    className={`min-h-[44px] min-w-[64px] px-3.5 py-2 rounded-xl border font-bold text-[15px] transition-all ${
                      i === selected
                        ? "bg-gradient-to-r from-[var(--color-pink)] via-[var(--color-violet)] to-[var(--color-cyan)] border-transparent text-white"
                        : "bg-[var(--color-card)] border-[var(--color-line2)] text-[var(--color-ink)] hover:border-[var(--color-violet)]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.size}&quot;
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[40px] font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                  {formatPrice(tv.price)}
                </span>
                <span className="text-[var(--color-muted)] font-bold">per day, with stand</span>
              </div>
              <p className="text-[var(--color-muted)] mt-1.5">{tv.use}</p>

              {/* Extras */}
              <div className="grid grid-cols-2 gap-4 mt-5 max-sm:grid-cols-1">
                <div className="rounded-2xl p-5 bg-[var(--color-card)] border border-[var(--color-line)] flex flex-col gap-1">
                  <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-muted)]">TV stand only</span>
                  <span className="text-2xl font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>₹1,000</span>
                  <span className="text-sm text-[var(--color-muted)]">per day</span>
                </div>
                <div className="rounded-2xl p-5 bg-[var(--color-card)] border-2 border-transparent flex flex-col gap-1" style={{ background: "linear-gradient(var(--color-card), var(--color-card)) padding-box, linear-gradient(100deg, #ff2e88, #7b5cff, #18e0ff) border-box" }}>
                  <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-muted)]">Labour & installation</span>
                  <span className="text-2xl font-extrabold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>₹2,000</span>
                  <span className="text-sm text-[var(--color-muted)]">per booking · free for 6+ TVs</span>
                </div>
              </div>

              {/* Full table */}
              <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] overflow-x-auto mt-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs tracking-[0.12em] uppercase text-[var(--color-muted)]">Size</th>
                      <th className="px-4 py-3 text-right text-xs tracking-[0.12em] uppercase text-[var(--color-muted)]">Per day</th>
                      <th className="px-4 py-3 text-left text-xs tracking-[0.12em] uppercase text-[var(--color-muted)]">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tvs.map((t) => (
                      <tr key={t.size} className="border-t border-[var(--color-line)]">
                        <td className="px-4 py-3 font-bold">{t.size}&quot;</td>
                        <td className="px-4 py-3 text-right font-bold tabular-nums">{formatPrice(t.price)}</td>
                        <td className="px-4 py-3 text-[var(--color-muted)]">{t.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
