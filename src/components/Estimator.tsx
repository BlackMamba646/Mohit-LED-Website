"use client";

import { useState, useCallback } from "react";
import AnimateIn from "./AnimateIn";

const TVS = [
  { s: 43, p: 3000 }, { s: 50, p: 4000 }, { s: 55, p: 5000 }, { s: 65, p: 7000 },
  { s: 75, p: 12000 }, { s: 85, p: 18000 }, { s: 98, p: 25000 }, { s: 100, p: 30000 },
];
const BAGS = [
  { s: 17, p: 700 }, { s: 21, p: 1000 }, { s: 27, p: 1500 }, { s: 32, p: 2000 },
];

function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

interface Row { label: string; amount: number }

export default function Estimator() {
  const [droneType, setDroneType] = useState("130000");
  const [droneQty, setDroneQty] = useState(0);
  const [tvIdx, setTvIdx] = useState(2);
  const [tvQty, setTvQty] = useState(0);
  const [tvDays, setTvDays] = useState(1);
  const [bagIdx, setBagIdx] = useState(0);
  const [bagQty, setBagQty] = useState(0);
  const [bagDays, setBagDays] = useState(1);
  const [djQty, setDjQty] = useState(0);
  const [djDays, setDjDays] = useState(1);
  const [vanSmallDays, setVanSmallDays] = useState(0);
  const [vanBigDays, setVanBigDays] = useState(0);

  const calc = useCallback(() => {
    const rows: Row[] = [];
    const warnings: string[] = [];

    const droneRate = parseFloat(droneType);
    const drone = droneRate * droneQty;
    if (drone) rows.push({ label: `Drone screen × ${droneQty}`, amount: drone });

    const tv = TVS[tvIdx];
    const tvCost = tv.p * tvQty * Math.max(1, tvDays);
    const labour = tvQty > 0 && tvQty < 6 ? 2000 : 0;
    if (tvCost) rows.push({ label: `${tvQty} × ${tv.s}" TV × ${tvDays}d`, amount: tvCost });
    if (tvQty > 0) rows.push({ label: `TV labour${labour ? "" : " (free, 6+)"}`, amount: labour });

    const bag = BAGS[bagIdx];
    const bagsCost = bag.p * bagQty * Math.max(1, bagDays);
    if (bagsCost) rows.push({ label: `${bagQty} × ${bag.s}" bag`, amount: bagsCost });

    const djCost = 15000 * djQty * Math.max(1, djDays);
    if (djCost) rows.push({ label: "LED DJ console", amount: djCost });

    let vs = vanSmallDays, vb = vanBigDays;
    if (vs > 0 && vs < 10) { warnings.push("Small van min 10 days."); vs = 10; }
    if (vb > 0 && vb < 10) { warnings.push("Big van min 10 days."); vb = 10; }
    const vansCost = 18000 * vs + 40000 * vb;
    if (vansCost) rows.push({ label: "LED vans", amount: vansCost });

    const sub = rows.reduce((s, r) => s + r.amount, 0);
    const gst = sub * 0.18;
    const total = sub + gst;
    const advance = ((drone + vansCost) * 0.5 + (tvCost + labour + bagsCost + djCost)) * 1.18;

    return { rows, sub, gst, total, advance, warnings };
  }, [droneType, droneQty, tvIdx, tvQty, tvDays, bagIdx, bagQty, bagDays, djQty, djDays, vanSmallDays, vanBigDays]);

  const { rows, sub, gst, total, advance, warnings } = calc();

  const WA = "https://wa.me/919877943901?text=";
  const msg = rows.length
    ? `Hi LUMORA, I would like a quotation for:\n${rows.map(r => `- ${r.label}: ${inr(r.amount)}`).join("\n")}\nEstimated total incl. GST: ${inr(total)}`
    : "";

  return (
    <section
      id="estimator"
      className="py-20 md:py-28 bg-[var(--color-bg2)] border-y border-[var(--color-line)]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Plan Your Budget
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Event <span className="grad-text">estimator.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[520px] mb-10">
            Add what you need and see a rough total with GST and the advance to book.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          {/* Form lines */}
          <div className="flex flex-col gap-3">
            {/* Drone */}
            <EstLine label="Drone screen" sub="₹1.1L–1.3L / event">
              <Select label="Type" value={droneType} onChange={setDroneType} options={[
                { v: "130000", l: "Direct ₹1,30,000" },
                { v: "110000", l: "Trade ₹1,10,000" },
              ]} />
              <NumInput label="Events" value={droneQty} onChange={setDroneQty} />
            </EstLine>

            {/* TVs */}
            <EstLine label="LED TVs" sub="₹3K–30K / day">
              <Select label="Size" value={String(tvIdx)} onChange={(v) => setTvIdx(+v)} options={TVS.map((t, i) => ({ v: String(i), l: `${t.s}" · ${inr(t.p)}` }))} />
              <NumInput label="Qty" value={tvQty} onChange={setTvQty} />
              <NumInput label="Days" value={tvDays} onChange={setTvDays} />
            </EstLine>

            {/* Bags */}
            <EstLine label="LED bags" sub="₹700–2K / bag / day">
              <Select label="Size" value={String(bagIdx)} onChange={(v) => setBagIdx(+v)} options={BAGS.map((b, i) => ({ v: String(i), l: `${b.s}" · ${inr(b.p)}` }))} />
              <NumInput label="Bags" value={bagQty} onChange={setBagQty} />
              <NumInput label="Days" value={bagDays} onChange={setBagDays} />
            </EstLine>

            {/* DJ */}
            <EstLine label="LED DJ console" sub="₹15,000 / day">
              <NumInput label="Qty" value={djQty} onChange={setDjQty} />
              <NumInput label="Days" value={djDays} onChange={setDjDays} />
            </EstLine>

            {/* Vans */}
            <EstLine label="LED vans" sub="Min 10 days">
              <NumInput label="Small days" value={vanSmallDays} onChange={setVanSmallDays} />
              <NumInput label="Big days" value={vanBigDays} onChange={setVanBigDays} />
            </EstLine>
          </div>

          {/* Summary */}
          <div
            className="sticky top-24 rounded-2xl p-6 flex flex-col gap-3 border-2 border-transparent"
            style={{
              background: "linear-gradient(var(--color-card), var(--color-card)) padding-box, linear-gradient(100deg, #ff2e88, #7b5cff, #18e0ff) border-box",
            }}
          >
            {!rows.length && (
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-muted)]">Add an item to start</span>
                <span className="font-bold">—</span>
              </div>
            )}
            {rows.map((r, i) => (
              <div key={i} className="flex justify-between text-sm tabular-nums">
                <span className="text-[var(--color-muted)] font-semibold">{r.label}</span>
                <span className="font-extrabold">{inr(r.amount)}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm pt-2 border-t border-[var(--color-line2)]">
              <span className="text-[var(--color-muted)]">Subtotal</span>
              <span className="font-extrabold tabular-nums">{inr(sub)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--color-muted)]">GST @18%</span>
              <span className="font-extrabold tabular-nums">{inr(gst)}</span>
            </div>
            <div className="flex justify-between text-base pt-3 border-t border-[var(--color-line2)]">
              <span className="text-[var(--color-muted)] font-semibold">Total</span>
              <span className="font-extrabold text-2xl tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                {inr(total)}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-bg2)] border border-[var(--color-line)] text-sm">
              <span className="text-[var(--color-muted)]">Advance to book: </span>
              <span className="font-extrabold text-[var(--color-gold)]">{inr(advance)}</span>
            </div>
            {warnings.length > 0 && (
              <p className="text-sm font-bold text-[var(--color-gold)]">{warnings.join(" ")}</p>
            )}
            <small className="text-xs text-[var(--color-dim)] leading-relaxed">
              Final quotation may differ. Transport at actuals.
            </small>
            {rows.length > 0 && (
              <a
                href={WA + encodeURIComponent(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow rounded-full px-6 py-3 text-sm font-extrabold mt-2 inline-flex items-center justify-center gap-2"
              >
                Send Estimate on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function EstLine({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1.3fr_repeat(3,1fr)] gap-3 items-end p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-line)] max-sm:grid-cols-2">
      <div className="font-extrabold text-[15px] self-center max-sm:col-span-2">
        {label}
        <small className="block text-[var(--color-muted)] font-semibold text-xs">{sub}</small>
      </div>
      {children}
    </div>
  );
}

function NumInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-extrabold tracking-[0.06em] uppercase text-[var(--color-muted)]">{label}</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-[var(--color-line2)] bg-[#0a0a12] text-[var(--color-ink)] font-semibold text-[15px] focus:outline-none focus:border-[var(--color-violet)] tabular-nums"
      />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-extrabold tracking-[0.06em] uppercase text-[var(--color-muted)]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-[var(--color-line2)] bg-[#0a0a12] text-[var(--color-ink)] font-semibold text-[15px] focus:outline-none focus:border-[var(--color-violet)]"
      >
        {options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </label>
  );
}
