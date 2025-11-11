import { Button } from "@/components/ui/button";
import { MultiStepForm } from "./multi-step-form";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-20 py-12 md:py-28 px-5 md:px-16">
      <div className="space-y-6 max-w-[700px]">
        <h1 className="text-2xl md:text-5xl lg:text-[56px] font-bold leading-[120%]">
          Incorporate Your Private Limited Company Hassle-Free
        </h1>

        <p className="md:text-lg leading-normal">
          Expert CA assistance, transparent pricing, and 100% MCA compliance —
          get your company registered quickly and affordably.
        </p>

        <ul className="md:text-lg">
          <li>✅ 1000+ companies incorporated</li>
          <li>✅ Registration starts at ₹1499</li>
          <li>✅ Expert assistance - Same day documentation</li>
          <li>✅ Trusted by startups</li>
        </ul>

        <Button variant="outline" size="lg" className="mt-4 text-lg">
          See pricing
        </Button>
      </div>

      <MultiStepForm />
    </section>
  );
}
