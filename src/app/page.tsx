import { BottomCTA } from "@/components/sections/bottom-cta";
import Hero from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedCompanies } from "@/components/sections/trusted-companies";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />

      <TrustedCompanies />

      <Pricing />

      <Testimonials />

      <BottomCTA />
    </main>
  );
}
