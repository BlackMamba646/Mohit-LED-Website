"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "As early as possible. Peak wedding and festival seasons fill up fast. We recommend booking at least 2–4 weeks ahead for drone screens and LED vans.",
  },
  {
    q: "Can I see the drone screen before booking?",
    a: "Yes — we can arrange a demo at our facility in Ludhiana. Call or WhatsApp us to schedule.",
  },
  {
    q: "What content works best on the drone screen?",
    a: "P20 pixel pitch is best for bold logos, names and large text. Detailed graphics or small fonts won't be legible at that resolution. We'll help you optimize your content.",
  },
  {
    q: "What happens if it rains during a drone flight?",
    a: "The pilot may land early for wind, rain, signal loss or a crowd entering the safety area. Full payment still applies as the crew and equipment are committed.",
  },
  {
    q: "Who arranges flight permissions for the drone?",
    a: "All flight and venue permissions are the client's responsibility. We can guide you through the process.",
  },
  {
    q: "Do you operate outside Ludhiana?",
    a: "Yes, we cover all of Punjab and neighbouring states. Transportation is charged at actuals based on distance.",
  },
  {
    q: "What's included in the rental?",
    a: "Every rental includes delivery, setup, operation by our crew, and takedown. GST @18% and transportation are extra.",
  },
  {
    q: "Can I cancel or change the date?",
    a: "One date change is allowed if requested at least 7 days before the event, subject to availability. A later change is treated as a cancellation. Payments are non-refundable on cancellation.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-[860px] mx-auto px-4">
        <AnimateIn>
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            FAQ
          </p>
          <h2
            className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Good to know.
          </h2>
        </AnimateIn>

        <div>
          {faqs.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.04}>
              <div className="border-b border-[var(--color-line)]">
                <button
                  className="w-full flex justify-between items-center gap-4 py-5 text-left font-extrabold text-[16.5px] hover:text-[var(--color-cyan)] transition-colors"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="text-[var(--color-cyan)] text-2xl shrink-0 leading-none">
                    {openIdx === i ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIdx === i ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[var(--color-muted)]">{f.a}</p>
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
