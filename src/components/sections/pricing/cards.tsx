"use client";

import { Check } from "lucide-react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useModalOpen, useSelectedPlan, useUserContext } from "@/context/modal";
import { cardContents } from "@/lib/constants";
import { purchase } from "@/lib/utils/razorpay";

function PricingCards() {
  const pathname = usePathname();
  const { setIsOpen } = useModalOpen();
  const { setSelectedPlan } = useSelectedPlan();
  const { user } = useUserContext();

  function handleGetStarted(plan: {
    title: string;
    description: string;
    price: number;
  }) {
    setSelectedPlan(plan);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 mt-8 md:mt-20">
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      {cardContents.map((item) => (
        <Card key={`card-${item.title}`} className="py-8 gap-8">
          <CardHeader className="px-8 text-[20px] font-bold gap-0">
            {item.title}
          </CardHeader>
          <CardDescription className="text-base text-inherit px-8">
            {item.description}
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

              {pathname.includes("/pricing") ? (
                <Button
                  size="lg"
                  className="text-base"
                  onClick={() =>
                    purchase({
                      name: user.name,
                      phone: user.phone,
                      email: user.email,
                      plan: item.title,
                      description: item.description,
                      amount: item.price,
                    })
                  }
                >
                  Pay Now
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="text-base"
                  onClick={() => handleGetStarted(item)}
                >
                  Get Started
                </Button>
              )}

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
  );
}

export { PricingCards };
