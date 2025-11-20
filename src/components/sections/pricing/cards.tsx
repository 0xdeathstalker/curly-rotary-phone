"use client";

import { ChevronDown, CircleCheckBig, Info } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import * as React from "react";
import { GovtFeesDetails } from "@/components/sections/govt-fees-details";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentProcessingOverlay } from "@/components/ui/payment-processing-overlay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useModalOpen, useSelectedPlan, useUserContext } from "@/context/modal";
import { CARD_CONTENTS } from "@/lib/constants";
import { cn, formatNumber } from "@/lib/utils";
import { purchase } from "@/lib/utils/razorpay";

function PricingCards() {
  const pathname = usePathname();
  const router = useRouter();
  const modalState = useModalOpen();
  const { setIsOpen } = modalState;
  const { setSelectedPlan } = useSelectedPlan();
  const { user } = useUserContext();

  const [isProcessingPayment, setIsProcessingPayment] = React.useState(false);

  const isUserDataAvailable = user.name && user.email && user.phone;

  function handleGetStarted(plan: {
    title: string;
    description: string;
    price: number;
  }) {
    setSelectedPlan(plan);
    modalState.setModalSource("pricing");
    setIsOpen(true);
  }

  function handlePayment(item: {
    title: string;
    description: string;
    price: number;
  }) {
    if (!isUserDataAvailable) {
      alert("Session expired. Please complete the registration form again.");
      router.push("/");
      return;
    }

    purchase({
      name: user.name,
      phone: user.phone,
      email: user.email,
      plan: item.title,
      description: item.description,
      amount: item.price,
      onPaymentStart: () => setIsProcessingPayment(true),
    });
  }

  return (
    <React.Fragment>
      <PaymentProcessingOverlay isVisible={isProcessingPayment} />

      <div className="max-w-[1256px] mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-8 mt-8 md:mt-20 overflow-x-auto">
        <Script
          type="text/javascript"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />

        {CARD_CONTENTS.map((item, index) => (
          <Card
            key={`card-${item.title}`}
            className={cn(
              "max-w-[400px] w-full h-fit sm:h-[560px] gap-4 px-6 flex flex-col",
              item.title === "Advanced"
                ? "bg-[#58B09C]/10 border-[#1D364D]/40"
                : "bg-[#D9D9D9]/10 border-[#1D364D]/30",
            )}
          >
            <CardHeader className="px-0">
              <CardTitle className="flex items-center justify-between text-[32px] text-[#1E293B] font-bold">
                {item.title}

                {item.recommended ? (
                  <span className="bg-[#F99F0E]/45 flex items-center gap-1 rounded-full py-1 px-2 font-medium text-[#1E293B] text-xs border border-[#F99F0E]">
                    <Image
                      src="/logos/badge.svg"
                      alt="badge logo"
                      width={16}
                      height={16}
                      className="size-4"
                    />{" "}
                    Recommended
                  </span>
                ) : null}
              </CardTitle>
              <CardDescription className="text-[#3F3F3F] text-base font-semibold">
                {item.description}
              </CardDescription>
            </CardHeader>

            <Separator className="bg-[#D9D9D9]" />

            <CardContent className="px-0 flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-5xl xl:text-[56px] font-bold leading-[120%] text-[#1D364D] tabular-nums">
                    ₹{formatNumber(item.price)}
                  </h1>

                  <div className="text-[#1E1E1E] text-sm xl:text-base">
                    <div className="flex items-center gap-1 text-nowrap">
                      +{" "}
                      <span className="text-base underline underline-offset-2">
                        Govt. Fees
                      </span>
                      <GovtFeesDetails>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-6 cursor-pointer font-normal hover:bg-transparent border border-transparent hover:border-input font-sans"
                        >
                          <Info className="size-3" />
                        </Button>
                      </GovtFeesDetails>
                    </div>

                    <p> (to be paid later)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {item.title !== "Basic" && (
                    <span className="font-medium">
                      Everything in {CARD_CONTENTS[index - 1].title} +
                    </span>
                  )}
                  <ul className="mt-2 space-y-2">
                    {item.inclusions.map((inc, index) => (
                      <li
                        key={`${inc.title}-${index}`}
                        className="flex items-center gap-2 leading-tight"
                      >
                        <CircleCheckBig className="text-[#58B09C] size-5 shrink-0" />{" "}
                        {inc.title}
                      </li>
                    ))}
                  </ul>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full bg-transparent justify-between text-base border-[#6B7280]/40",
                          item.title === "Advanced"
                            ? "hover:bg-[#58B09C]/15"
                            : "hover:bg-accent",
                        )}
                      >
                        View all inclusions <ChevronDown className="size-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2 font-sans w-[var(--radix-popover-trigger-width)]">
                      <ul>
                        <li className="flex items-center gap-2 py-1 px-2">
                          <CircleCheckBig className="size-[18px] text-[#58B09C]" />
                          <span>2 DSC</span>
                        </li>
                        <li className="flex items-center gap-2 py-1 px-2">
                          <CircleCheckBig className="size-[18px] text-[#58B09C]" />
                          <span>2 DIN</span>
                        </li>
                        <li className="flex items-center gap-2 py-1 px-2">
                          <CircleCheckBig className="size-[18px] text-[#58B09C]" />
                          <span>Company PAN & TAN</span>
                        </li>
                        <li className="flex items-center gap-2 py-1 px-2">
                          <CircleCheckBig className="size-[18px] text-[#58B09C]" />
                          <span>ESI and EPFO Regsitration</span>
                        </li>
                      </ul>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="mt-6 sm:mt-0">
                {pathname.includes("/pricing") ? (
                  <Button
                    size="lg"
                    variant="brand"
                    className="w-full"
                    disabled={!isUserDataAvailable}
                    onClick={() => handlePayment(item)}
                  >
                    Pay Now
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="brand"
                    className="w-full"
                    onClick={() => handleGetStarted(item)}
                  >
                    Get {item.title}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}

export { PricingCards };
