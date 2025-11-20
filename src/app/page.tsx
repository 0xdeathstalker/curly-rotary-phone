import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Company Registration | Taxocity",
  description:
    "Register your private limited company, LLP, or OPC in India with expert CA/CS support. Transparent pricing, quick processing, and complete compliance guidance from Taxocity.",
  keywords: [
    "company registration India",
    "private limited company registration",
    "LLP registration online",
    "OPC registration",
    "business registration with CA support",
    "startup registration",
    "company incorporation services",
    "GST registration",
  ],
  openGraph: {
    title:
      "Fast & Affordable Company Registration with CA/CS Support | Taxocity",
    description:
      "Register your private limited company, LLP, or OPC in India with expert CA/CS support. Transparent pricing, quick processing, and complete compliance guidance.",
    url: "https://taxocity.com",
    type: "website",
    images: [
      {
        url: "/logos/taxocity.png",
        width: 1200,
        height: 630,
        alt: "Taxocity - Company Registration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fast & Affordable Company Registration with CA/CS Support | Taxocity",
    description:
      "Register your private limited company, LLP, or OPC in India with expert CA/CS support. Transparent pricing and complete compliance guidance.",
    images: ["/logos/taxocity.png"],
  },
  alternates: {
    canonical: "/",
  },
};

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
