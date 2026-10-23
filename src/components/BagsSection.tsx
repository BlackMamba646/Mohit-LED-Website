"use client";

import AnimateIn from "./AnimateIn";

const bags = [
  { size: 17, price: 700 },
  { size: 21, price: 1000 },
  { size: 27, price: 1500 },
  { size: 32, price: 2000 },
];

function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function BagsSection() {
  return (
    <section id="bags" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Product 03
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LED <span className="grad-text">Bags.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[460px] mb-10">
            Walking screens worn on the back. Handed over fully charged; brand
            ambassadors available on request.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bags.map((b, i) => (
            <AnimateIn key={b.size} delay={i * 0.1}>
              <article
                className="card-glow rounded-2xl bg-[var(--color-card)] border border-[var(--color-line)] p-6 flex flex-col items-center gap-3 text-center"
                style={{ perspective: "600px" }}
              >
                <div className="h-[170px] flex flex-col justify-end items-center">
                  <div
                    className="transition-transform duration-500 hover:rotate-y-[14deg]"
                    style={{ transformStyle: "preserve-3d", transform: "rotateY(-18deg)" }}
                  >
                    {/* Straps */}
                    <div className="flex justify-between mx-auto" style={{ width: `${b.size * 2.5}px` }}>
                      <div className="w-3.5 h-5 border-4 border-[#3a3a52] border-b-0 rounded-t-[10px]" />
                      <div className="w-3.5 h-5 border-4 border-[#3a3a52] border-b-0 rounded-t-[10px]" />
                    </div>
                    {/* Bag body */}
                    <div
                      className="rounded-[16px_16px_10px_10px] bg-[#1d1d2c] p-2.5"
                      style={{
                        width: `${b.size * 3}px`,
                        height: `${b.size * 4}px`,
                        boxShadow: "0 0 50px -10px var(--color-pink)",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-md"
                        style={{
                          background: "linear-gradient(160deg, var(--color-pink), var(--color-gold))",
                          animation: "led-pulse 2.6s ease-in-out infinite",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {b.size}&quot;
                </span>
                <span className="text-[22px] font-extrabold text-[var(--color-gold)] tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                  {formatPrice(b.price)}
                </span>
                <span className="text-sm text-[var(--color-muted)] font-semibold">per bag / day</span>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
