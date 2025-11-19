import { CTASection } from "@/components/sections/cta-section";
import { FloatingGetStarted } from "@/components/sections/floating-get-started-button";
import { FormPricingModal } from "@/components/sections/form-pricing-modal";
import { Hero } from "@/components/sections/hero";
import { ModalAutoTrigger } from "@/components/sections/modal-auto-trigger";
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

      <CTASection className="rounded-xl md:rounded-none mx-4 md:mx-0">
        <h1 className="text-2xl md:text-5xl text-center leading-[120%] font-bold max-w-[310px] md:max-w-3xl">
          Get fast, affordable company registration with complete CA/CS support.{" "}
          <span className="text-[#F9B934]">Start now.</span>
        </h1>
      </CTASection>

      <FormPricingModal />

      <FloatingGetStarted />

      <ModalAutoTrigger />
    </main>
  );
}
