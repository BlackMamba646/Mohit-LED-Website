const items = [
  "Drone LED Screen",
  "LED TVs 43\"–100\"",
  "LED Bags",
  "LED DJ Console",
  "LED Vans",
  "Weddings",
  "Brand Launches",
  "Roadshows",
  "Concerts",
  "Exhibitions",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      className="border-y border-[var(--color-line)] bg-[var(--color-bg2)] overflow-hidden py-4"
      aria-hidden="true"
    >
      <div
        className="flex gap-11 w-max whitespace-nowrap text-base font-semibold text-[var(--color-muted)]"
        style={{
          fontFamily: "var(--font-display)",
          animation: "marquee-scroll 34s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className="text-[var(--color-pink)] ml-11">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
