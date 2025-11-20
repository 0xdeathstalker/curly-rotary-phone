import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable pricing for private limited company, LLP, and OPC registration in India. No hidden fees. Includes CA/CS support, government fees, and complete documentation assistance.",
  keywords: [
    "company registration cost",
    "company registration pricing",
    "private limited company registration fees",
    "LLP registration cost",
    "OPC registration fees",
    "business incorporation pricing",
    "company registration packages",
    "affordable company registration",
  ],
  openGraph: {
    title: "Transparent Pricing for Company Registration Services | Taxocity",
    description:
      "Affordable pricing for private limited company, LLP, and OPC registration in India. No hidden fees. Includes CA/CS support and complete documentation assistance.",
    url: "https://taxocity.com/pricing",
    type: "website",
    images: [
      {
        url: "/logos/taxocity.png",
        width: 1200,
        height: 630,
        alt: "Taxocity Pricing - Company Registration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing for Company Registration Services | Taxocity",
    description:
      "Affordable pricing for company registration in India. No hidden fees. Includes CA/CS support and complete documentation assistance.",
    images: ["/logos/taxocity.png"],
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="font-sans">
      <div className="py-16">
        <Pricing />
      </div>
    </main>
  );
}
