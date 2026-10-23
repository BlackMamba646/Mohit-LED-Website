import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMORA LED Rentals | Drone Screens, LED TVs, Vans & More | Ludhiana & Punjab",
  description:
    "LUMORA rents drone LED screens, LED TVs, LED bags, LED DJ consoles and LED vans for weddings, brand launches and events across Ludhiana and Punjab.",
  keywords: [
    "LED screen rental",
    "drone LED screen",
    "LED TV rental Ludhiana",
    "LED van advertising Punjab",
    "wedding LED screen",
    "LED bags rental",
    "event LED screens",
    "LUMORA",
  ],
  openGraph: {
    title: "LUMORA LED Rentals — Light Up Every Moment",
    description:
      "Drone LED screens, LED TVs, LED bags, DJ consoles & LED vans on rent for weddings, launches and events in Ludhiana & Punjab.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
