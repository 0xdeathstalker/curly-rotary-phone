"use client";

import { Button } from "@/components/ui/button";

function PricingButton() {
  function scrollToPricing() {
    const pricingSectionElement = document.getElementById("pricing");
    if (pricingSectionElement) {
      pricingSectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-[#F9FAFB] border-[#6B7280] mt-4 md:mt-0"
      onClick={scrollToPricing}
    >
      See all the pricing
    </Button>
  );
}

export { PricingButton };
