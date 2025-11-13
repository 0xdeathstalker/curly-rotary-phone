"use client";

import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useModalOpen, useSelectedPlan } from "@/context/modal";

function PlanSummary() {
  const { setIsOpen } = useModalOpen();
  const { selectedPlan } = useSelectedPlan();
  const router = useRouter();

  function handleChangePlan() {
    setIsOpen(false);
    router.push("/pricing");
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

      <Button className="w-full mt-32">Pay Now</Button>
    </div>
  );
}

export { PlanSummary };
