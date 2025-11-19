import { BottomCTA } from "@/components/sections/bottom-cta";
import { FloatingGetStarted } from "@/components/sections/floating-get-started-button";
import { FormPricingModal } from "@/components/sections/form-pricing-modal";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedCompanies } from "@/components/sections/trusted-companies";
import { WhyTaxocity } from "@/components/sections/why-taxocity";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />

      <TrustedCompanies />

      <Pricing />

      <Testimonials />

      <Overview />

      <WhyTaxocity />

      <BottomCTA />

      <FormPricingModal />

      <FloatingGetStarted />
    </main>
  );
}
