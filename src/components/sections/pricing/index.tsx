import { PricingCards } from "./cards";

export function Pricing() {
  return (
    <section className="py-12 md:py-28 px-5 md:px-16">
      <div className="space-y-6">
        <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl leading-tight font-bold">
          Right Plan for Your Business
        </h1>
        <p className="text-center md:text-lg">
          Guaranteed Application Submission within 7 Days - or Get a 100% Money
          Back Guarantee!
        </p>
      </div>

      <PricingCards />
    </section>
  );
}
