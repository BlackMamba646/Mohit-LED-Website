export default function Footer() {
  return (
    <>
      <footer className="border-t border-[var(--color-line)] py-10 mt-10">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-between gap-5 text-sm text-[var(--color-muted)]">
          <div>
            <div className="flex items-center gap-2.5 font-extrabold text-xl text-[var(--color-ink)] tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-pink)] via-[var(--color-violet)] to-[var(--color-cyan)] grid grid-cols-3 gap-[2px] p-[5px] shrink-0">
                {[...Array(9)].map((_, i) => (
                  <i key={i} className={`bg-white rounded-[1px] ${i % 2 === 0 ? "" : "opacity-40"}`} />
                ))}
              </span>
              LUMORA
            </div>
            <p>LED screens on rent &middot; Ludhiana &middot; Punjab</p>
          </div>
          <div className="text-right">
            <p>www.lumoralightup.com &middot; info@lumoralightup.com</p>
            <p className="mt-1">WhatsApp +91 98779 43901 &middot; @lumora.lightup</p>
            <p className="mt-1">All prices exclude GST @18% &middot; transportation at actuals</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919877943901?text=Hi%20LUMORA%2C%20I%27d%20like%20LED%20screens%20on%20rent%20for%20my%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 w-[58px] h-[58px] rounded-full bg-[#25d366] grid place-items-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        aria-label="Chat with LUMORA on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.609.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.455-.764-6.178-2.055l-.28-.214-2.905.974.974-2.905-.214-.28A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </>
  );
}
