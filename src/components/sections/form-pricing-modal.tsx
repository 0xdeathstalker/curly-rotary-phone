"use client";

import { MultiStepForm } from "@/components/sections/multi-step-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalOpen } from "@/context/modal";

function FormPricingModal() {
  const { isOpen, setIsOpen, modalSource } = useModalOpen();

  // if opened from pricing cards, showing plan summary after step 1
  // if opened from header, redirecting to pricing page after step 1
  const showPlanSummary = modalSource === "pricing";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="font-sans gap-6">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-4xl font-bold">
            Register your private ltd. company
          </DialogTitle>
        </DialogHeader>
        <div>
          <MultiStepForm showPlanSummary={showPlanSummary} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { FormPricingModal };
