import { Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 mt-8 md:mt-20">
        {CardContents.map((item) => (
          <Card key={`card-${item.title}`} className="py-8 gap-8">
            <CardHeader className="px-8 text-[20px] font-bold gap-0">
              {item.title}
            </CardHeader>
            <CardDescription className="text-base text-inherit px-8">
              Perfect for submitting your company application with expert
              assistance in 21 days.
            </CardDescription>
            <Separator className="px-8" />
            <CardContent className="px-8">
              <div className="flex flex-col gap-8">
                <div>
                  <h1 className="text-[56px] font-bold leading-[120%] tabular-nums">
                    ₹{item.price}
                  </h1>
                  <p className="text-muted-foreground">
                    + Govt. Fees (to be paid later)
                  </p>
                </div>

                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "text-base"
                  )}
                >
                  Get Started
                </Link>

                <Separator />

                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <Check className="size-5 shrink-0" /> Incorporation
                    Certificate in 30 days
                  </li>
                  <li className="flex items-center gap-4">
                    <Check className="size-5 shrink-0" /> Expert Advice by CA/CS
                  </li>
                  <li className="flex items-center gap-4">
                    <Check className="size-5 shrink-0" /> MOA/AOA , PAN/TAN
                  </li>
                  <li className="flex items-center gap-4">
                    <Check className="size-5 shrink-0" /> DIN for Directors
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const CardContents = [
  {
    title: "Basic Plan",
    price: "1499",
  },
  {
    title: "Business Plan",
    price: "3499",
  },
  {
    title: "Enterprise Plan",
    price: "8499",
  },
];
