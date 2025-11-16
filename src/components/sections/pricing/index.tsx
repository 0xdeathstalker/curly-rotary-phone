import { PricingCards } from "./cards";

export function Pricing() {
  return (
    <section className="py-12 md:py-28 px-5 md:px-16">
      <div className="space-y-6 mb-20">
        <h2 className="text-[32px] md:text-5xl font-bold text-center">
          Right Plan for Your Business
        </h2>
        <p className="md:text-lg text-center">
          Guaranteed Application Submission within 7 Days — or Get a 100% Money
          Back Guarantee!
        </p>
      </div>

      <PricingCards />
    </section>
  );
}
