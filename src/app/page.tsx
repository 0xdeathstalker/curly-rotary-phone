import { StateSelection } from "@/components/sections/state-select";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="font-sans px-5 md:px-16">
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 py-12 md:py-28">
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

        <form className="border p-8 w-full md:w-auto md:p-12 md:grow">
          <h1 className="text-2xl md:text-4xl font-bold mb-9">
            Register your private ltd. company
          </h1>

          <FieldSet>
            <FieldGroup className="gap-2">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
              />
            </FieldGroup>

            <FieldGroup className="gap-2">
              <FieldLabel htmlFor="phone">Mobile number</FieldLabel>
              <Input
                id="phone"
                placeholder="Enter your mobile number"
                autoComplete="off"
              />
            </FieldGroup>

            <FieldGroup className="gap-2">
              <FieldLabel>State</FieldLabel>
              <StateSelection />
            </FieldGroup>

            <Button>Submit</Button>
          </FieldSet>
        </form>
      </section>
    </main>
  );
}
