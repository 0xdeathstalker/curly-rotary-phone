import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./styles/globals.css";
import Providers from "@/components/providers";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Taxocity - Company Registration & GST Filing Services in India",
    template: "%s | Taxocity",
  },
  description:
    "Simplify your business formation and compliance with Taxocity—your trusted partner in company incorporation, GST registration, and expert legal guidance. Serving entrepreneurs and growing businesses with transparent, reliable, and affordable solutions.",
  keywords: [
    "company registration",
    "GST registration",
    "business incorporation",
    "private limited company",
    "LLP registration",
    "one person company",
    "business compliance",
    "CA services",
    "trademark registration",
    "startup registration India",
    "company formation",
    "GST filing",
    "tax compliance",
    "legal services for business",
    "MCA Compliance",
    "Director appointment",
    "Director removal",
    "Business ITR",
  ],
  authors: [{ name: "Taxocity" }],
  creator: "Taxocity",
  publisher: "Taxocity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://taxocity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taxocity - Company Registration & GST Filing Services in India",
    description:
      "Simplify your business formation and compliance with Taxocity—your trusted partner in company incorporation, GST registration, and expert legal guidance.",
    url: "https://taxocity.com",
    siteName: "Taxocity",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logos/taxocity.png",
        width: 1200,
        height: 630,
        alt: "Taxocity - Business Registration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxocity - Company Registration & GST Filing Services in India",
    description:
      "Simplify your business formation and compliance with Taxocity—your trusted partner in company incorporation, GST registration, and expert legal guidance.",
    images: ["/logos/taxocity.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // TODO: replace with code from Google Search Console > Add Property > Copy verification code
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
