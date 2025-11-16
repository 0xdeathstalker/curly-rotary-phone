import type * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function GovtFeesDetails({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="font-sans">
        <DialogHeader>
          <DialogTitle>Breakdown of Government Fees</DialogTitle>
          <DialogDescription>Fees details table comes here</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export { GovtFeesDetails };
