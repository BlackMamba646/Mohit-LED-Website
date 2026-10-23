"use client";

import AnimateIn from "./AnimateIn";

const products = [
  {
    title: "Drone LED Screen",
    desc: "A 3 × 6 m outdoor screen lifted into the sky — the shot every guest films.",
    price: "₹1,30,000",
    unit: "per event",
    href: "#drone",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="14" y="16" width="20" height="28" rx="2" fill="url(#pg)" />
        <line x1="10" y1="12" x2="18" y2="16" stroke="#5a5a7a" strokeWidth="1.5" />
        <line x1="38" y1="12" x2="30" y2="16" stroke="#5a5a7a" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" fill="#2a2a3d" />
        <circle cx="38" cy="10" r="4" fill="#2a2a3d" />
        <circle cx="10" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
        <circle cx="38" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
        <defs>
          <linearGradient id="pg" x1="14" y1="16" x2="34" y2="44">
            <stop stopColor="#ff2e88" /><stop offset="0.5" stopColor="#7b5cff" /><stop offset="1" stopColor="#18e0ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "LED TVs & Stands",
    desc: "43\" to 100\" for conferences, lobbies, photo booths and live feeds.",
    price: "₹3,000",
    unit: "from, per day",
    href: "#tvs",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="6" y="10" width="36" height="22" rx="2" fill="none" stroke="url(#tg)" strokeWidth="2" />
        <rect x="10" y="14" width="28" height="14" rx="1" fill="url(#tg)" opacity="0.5" />
        <rect x="20" y="34" width="8" height="4" fill="#3a3a52" />
        <rect x="14" y="38" width="20" height="2" rx="1" fill="#3a3a52" />
        <defs>
          <linearGradient id="tg" x1="6" y1="10" x2="42" y2="32">
            <stop stopColor="#18e0ff" /><stop offset="1" stopColor="#7b5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "LED Bags",
    desc: "Walking screens for roadshows, malls, markets and wedding baraats.",
    price: "₹700",
    unit: "from, per bag/day",
    href: "#bags",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="14" y="14" width="20" height="26" rx="4" fill="#1d1d2c" />
        <rect x="17" y="17" width="14" height="20" rx="2" fill="url(#bg)" />
        <path d="M18 14 V8 Q18 6 20 6 H28 Q30 6 30 8 V14" fill="none" stroke="#3a3a52" strokeWidth="2.5" />
        <defs>
          <linearGradient id="bg" x1="17" y1="17" x2="31" y2="37">
            <stop stopColor="#ff2e88" /><stop offset="1" stopColor="#ffd23f" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "LED DJ Console",
    desc: "A curved console wrapped in a full-colour LED screen — the centrepiece.",
    price: "₹15,000",
    unit: "per day",
    href: "#dj",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="20" width="40" height="16" rx="3" fill="url(#dg)" />
        <circle cx="16" cy="28" r="4" fill="#0a0a12" stroke="#5a5a7a" />
        <circle cx="32" cy="28" r="4" fill="#0a0a12" stroke="#5a5a7a" />
        <rect x="22" y="24" width="4" height="8" rx="1" fill="#0a0a12" />
        <defs>
          <linearGradient id="dg" x1="4" y1="20" x2="44" y2="36">
            <stop stopColor="#18e0ff" /><stop offset="0.5" stopColor="#7b5cff" /><stop offset="1" stopColor="#ff2e88" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "LED Vans",
    desc: "Moving billboards with 6 × 4 ft or 8 × 12 ft screens. Min 10 days.",
    price: "₹18,000",
    unit: "from, per day",
    href: "#vans",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="16" width="30" height="18" rx="2" fill="#24243a" />
        <rect x="7" y="19" width="24" height="12" rx="1" fill="url(#vg)" />
        <path d="M34 22 H42 Q44 22 44 24 V34 H34 Z" fill="#33334a" />
        <rect x="36" y="24" width="5" height="4" rx="1" fill="#6d7cf0" opacity="0.7" />
        <circle cx="14" cy="36" r="3" fill="#0d0d14" stroke="#4a4a64" strokeWidth="2" />
        <circle cx="38" cy="36" r="3" fill="#0d0d14" stroke="#4a4a64" strokeWidth="2" />
        <defs>
          <linearGradient id="vg" x1="7" y1="19" x2="31" y2="31">
            <stop stopColor="#ff2e88" /><stop offset="0.5" stopColor="#7b5cff" /><stop offset="1" stopColor="#18e0ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <div className="mb-12">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
              What We Rent
            </p>
            <h2
              className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Five ways to <span className="grad-text">glow.</span>
            </h2>
            <p className="mt-4 text-[var(--color-muted)] max-w-[480px]">
              Every rental comes with delivery, setup and our crew. Prices are
              before GST; transportation at actuals.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.08}>
              <a href={p.href} className="block h-full">
                <article className="card-glow h-full flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-card2)] to-[var(--color-card)] border border-[var(--color-line)]">
                  <div className="w-full h-[120px] rounded-xl bg-[#05050a] flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] flex-1">{p.desc}</p>
                  <div className="flex justify-between items-baseline gap-3 pt-3 border-t border-[var(--color-line)] text-sm text-[var(--color-muted)] font-bold">
                    <span>{p.unit}</span>
                    <span
                      className="text-lg text-[var(--color-ink)] tabular-nums"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.price}
                    </span>
                  </div>
                </article>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
