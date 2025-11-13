"use client";

import { MultiStepForm } from "@/components/sections/multi-step-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalState } from "@/context/modal";

function FormPricingModal() {
  const { isOpen, setIsOpen } = useModalState();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="font-sans gap-9">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-4xl font-bold">
            Register your private ltd. company
          </DialogTitle>
        </DialogHeader>
        <div>
          <MultiStepForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { FormPricingModal };
