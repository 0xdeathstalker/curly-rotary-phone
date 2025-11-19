"use client";

import { Info, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import { GovtFeesDetails } from "@/components/sections/govt-fees-details";
import { Button } from "@/components/ui/button";
import { useModalOpen, useSelectedPlan, useUserContext } from "@/context/modal";
import { purchase } from "@/lib/utils/razorpay";

function PlanSummary() {
  const { setIsOpen } = useModalOpen();
  const { selectedPlan } = useSelectedPlan();
  const { user } = useUserContext();
  const router = useRouter();

  function handleChangePlan() {
    setIsOpen(false);
    router.push("/pricing");
  }

  async function handlePayment() {
    setIsOpen(false);

    await purchase({
      name: user?.name,
      phone: user?.phone,
      email: user?.email,
      plan: selectedPlan?.title,
      description: selectedPlan?.description,
      amount: selectedPlan?.price,
    });
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[56px] text-[#1D364D] font-bold leading-[120%] tabular-nums">
          ₹{selectedPlan?.price}
        </h1>

        <Button variant="outline" onClick={handleChangePlan}>
          <SquarePen className="size-4" />
          Change Plan
        </Button>
      </div>

      {/* <p className="text-muted-foreground">+ Govt. Fees (to be paid later)</p> */}
      <div className="text-[#1E1E1E] text-sm xl:text-base">
        <div className="flex items-center gap-1 text-nowrap">
          <GovtFeesDetails>
            <Button
              variant="ghost"
              className="text-base text-[#1E1E1E] font-normal hover:bg-transparent border border-transparent hover:border-input font-sans"
            >
              <span>+ Govt. Fees</span>
              <Info className="size-3" />
            </Button>
          </GovtFeesDetails>
        </div>

        <p> (to be paid later)</p>
      </div>

      <p className="pt-4">{selectedPlan?.description}</p>

      <Button
        variant="brand"
        className="w-full mt-32"
        size="lg"
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </div>
  );
}

export { PlanSummary };
