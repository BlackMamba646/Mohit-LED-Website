import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import DroneSection from "@/components/DroneSection";
import TVsSection from "@/components/TVsSection";
import BagsSection from "@/components/BagsSection";
import DJSection from "@/components/DJSection";
import VansSection from "@/components/VansSection";
import Estimator from "@/components/Estimator";
import Terms from "@/components/Terms";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <DroneSection />
      <TVsSection />
      <BagsSection />
      <DJSection />
      <VansSection />
      <Estimator />
      <Terms />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
