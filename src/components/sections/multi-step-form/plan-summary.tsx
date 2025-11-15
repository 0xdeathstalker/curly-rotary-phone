"use client";

import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
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
        <h1 className="text-[56px] font-bold leading-[120%] tabular-nums">
          ₹{selectedPlan?.price}
        </h1>

        <Button variant="outline" onClick={handleChangePlan}>
          <SquarePen className="size-4" />
          Change Plan
        </Button>
      </div>

      <p className="text-muted-foreground">+ Govt. Fees (to be paid later)</p>

      <p className="pt-4">{selectedPlan?.description}</p>

      <Button className="w-full mt-32" onClick={handlePayment}>
        Pay Now
      </Button>
    </div>
  );
}

export { PlanSummary };
