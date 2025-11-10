import { Hero } from "@/components/sections/hero";
import { TrustedCompanies } from "@/components/sections/trusted-companies";

export default function Home() {
  return (
    <main className="font-sans px-5 md:px-16">
      <Hero />

      <TrustedCompanies />
    </main>
  );
}
