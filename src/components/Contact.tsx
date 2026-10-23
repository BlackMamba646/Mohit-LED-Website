"use client";

import { useState, type FormEvent } from "react";
import AnimateIn from "./AnimateIn";

const WA = "https://wa.me/917508400002?text=";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState(WA);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (name: string) => (fd.get(name) as string || "-").trim();
    const msg =
      `Hi LUMORA, I would like a quote.\nName: ${v("name")}\nPhone: ${v("phone")}\nEvent: ${v("event")}` +
      `\nDate: ${v("date")}\nNeed: ${v("need")}\nVenue: ${v("venue")}\nNotes: ${v("message")}`;
    setWaLink(WA + encodeURIComponent(msg));
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <AnimateIn>
          <div
            className="rounded-[28px] p-[clamp(22px,4vw,52px)] border border-[var(--color-line)]"
            style={{
              background:
                "radial-gradient(500px 300px at 0 0, rgba(255,46,136,0.18), transparent 60%), radial-gradient(500px 300px at 100% 100%, rgba(24,224,255,0.12), transparent 60%), var(--color-card)",
            }}
          >
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10">
              {/* Info */}
              <div>
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
                  Get in Touch
                </p>
                <h2
                  className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.1]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let&apos;s light up <span className="grad-text">your event.</span>
                </h2>
                <p className="text-[var(--color-muted)] mt-4">
                  Fill in your details and send them to us on WhatsApp for a free,
                  itemised quotation.
                </p>

                <div className="flex flex-col gap-3 mt-6">
                  <ContactRow label="WhatsApp / Call" value="+91 75084 00002" />
                  <ContactRow label="Email" value="info@lumoralightup.com" isEmail />
                  <div className="flex items-center gap-3 flex-wrap font-bold">
                    <span className="text-[var(--color-muted)]">Instagram</span>
                    <a
                      href="https://www.instagram.com/lumora.lightup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-pink)] hover:underline"
                    >
                      @lumora.lightup
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <FormField label="Your name" name="name" type="text" required placeholder="Aman Singh" />
                    <FormField label="Phone" name="phone" type="tel" required placeholder="+91" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <FormField label="Event type" name="event" type="text" placeholder="Wedding, launch..." />
                    <FormField label="Event date" name="date" type="date" />
                  </div>
                  <FormField label="What do you need?" name="need" type="text" placeholder="Drone screen, 4 LED TVs..." />
                  <FormField label="Venue / city" name="venue" type="text" placeholder="Ludhiana" />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold tracking-[0.06em] uppercase text-[var(--color-muted)]">
                      Additional notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[var(--color-line2)] bg-[#0a0a12] text-[var(--color-ink)] font-semibold text-[15px] focus:outline-none focus:border-[var(--color-violet)] resize-y"
                      placeholder="Any details about your event..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-glow rounded-full px-7 py-3.5 text-[15px] font-extrabold mt-2 inline-flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.609.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.455-.764-6.178-2.055l-.28-.214-2.905.974.974-2.905-.214-.28A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Prepare WhatsApp Message
                  </button>
                </form>

                {sent && (
                  <div className="mt-4 flex flex-col gap-2 p-4 rounded-xl bg-[var(--color-bg2)] border border-[var(--color-line)]">
                    <p className="text-sm font-bold text-[var(--color-ok)]">
                      Message ready! Click below to send it on WhatsApp.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow rounded-full px-6 py-3 text-sm font-extrabold inline-flex items-center justify-center gap-2 w-fit"
                    >
                      Open WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ContactRow({ label, value, isEmail }: { label: string; value: string; isEmail?: boolean }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div className="flex items-center gap-3 flex-wrap font-bold">
      <span className="text-[var(--color-muted)]">{label}</span>
      <span className={`tabular-nums select-all ${isEmail ? "text-[var(--color-cyan)]" : ""}`}>{value}</span>
      <button
        onClick={copy}
        className="min-h-[36px] px-3 py-1.5 rounded-full border border-[var(--color-line2)] bg-transparent text-[var(--color-muted)] text-xs font-bold hover:border-[var(--color-cyan)] transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-extrabold tracking-[0.06em] uppercase text-[var(--color-muted)]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-[var(--color-line2)] bg-[#0a0a12] text-[var(--color-ink)] font-semibold text-[15px] focus:outline-none focus:border-[var(--color-violet)]"
      />
    </div>
  );
}
