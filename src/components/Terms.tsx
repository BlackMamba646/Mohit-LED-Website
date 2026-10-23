"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const terms = [
  {
    key: "P",
    color: "var(--color-pink)",
    title: "Payments & Advances",
    items: [
      "Drone screen: 50% to book, balance 50% within 10 days of the event.",
      "LED TVs, stands, LED bags, DJ console: 100% payment in advance.",
      "LED vans: 50% to book, 50% at least 10 days before the campaign.",
      "All prices exclude GST @18%. Transportation is charged at actuals.",
    ],
  },
  {
    key: "D",
    color: "var(--color-violet)",
    title: "Drone Screen Rules",
    items: [
      "All flight and venue permissions are the client's responsibility.",
      "The pilot may land early for wind, rain, signal loss or safety. Full payment applies.",
      "Content must be submitted at least 48 hours before the event.",
      "P20 resolution — bold logos, names and large text work best.",
    ],
  },
  {
    key: "V",
    color: "var(--color-cyan)",
    title: "LED Vans",
    items: [
      "Minimum booking is 10 days.",
      "Client provides fuel for km travelled, generator diesel, and all ad & traffic permissions.",
      "Content changes during the campaign require 24 hours' notice.",
    ],
  },
  {
    key: "T",
    color: "var(--color-ok)",
    title: "TVs, Bags & DJ Console",
    items: [
      "Labour and installation for TVs is ₹2,000 per booking, free for 6+ TVs.",
      "LED bags are handed over fully charged; brand ambassadors on request.",
      "Equipment must be returned in the condition it was delivered.",
    ],
  },
  {
    key: "G",
    color: "var(--color-gold)",
    title: "Cancellation & Changes",
    items: [
      "Payments are non-refundable if the client cancels.",
      "One date change allowed if requested ≥7 days before the event, subject to availability.",
      "A later change is treated as a cancellation.",
      "Overdue balances carry interest at 18% per year.",
    ],
  },
  {
    key: "L",
    color: "var(--color-muted)",
    title: "Liability & General",
    items: [
      "Total liability is limited to the rental amount paid for that booking.",
      "All prices exclude GST @18%.",
      "Quotes are valid for 3 days.",
      "Subject to Ludhiana jurisdiction.",
    ],
  },
];

export default function Terms() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="terms" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Booking &amp; Payment
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms, <span className="grad-text">in plain words.</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[520px] mb-10">
            A booking is confirmed only when the advance reaches us. Paying the
            advance means you accept these rules.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-4">
          {terms.map((t, i) => (
            <AnimateIn key={t.key} delay={i * 0.06}>
              <div
                className={`rounded-2xl bg-[var(--color-card)] border border-[var(--color-line)] overflow-hidden ${
                  i === terms.length - 1 && terms.length % 2 !== 0 ? "md:col-span-2" : ""
                }`}
              >
                <button
                  className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="w-[30px] h-[30px] shrink-0 rounded-lg grid place-items-center text-sm font-bold text-[#0b0b14]"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.key}
                  </span>
                  <span className="font-bold text-[15.5px] flex-1">{t.title}</span>
                  <span className="text-xl text-[var(--color-cyan)]">{openIdx === i ? "–" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIdx === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-5 pb-5 flex flex-col gap-2 text-sm text-[#d3d2ea] list-disc pl-10">
                      {t.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
