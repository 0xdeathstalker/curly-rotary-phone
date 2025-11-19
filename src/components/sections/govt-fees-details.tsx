"use client";

import type * as React from "react";
import { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserContext } from "@/context/modal";
import { GOVERNMENT_FEES, STATES } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";

function GovtFeesDetails({ children }: { children: React.ReactNode }) {
  const { user } = useUserContext();

  const hasUserState = useMemo(() => {
    if (!user.state) return false;

    const userStateData = STATES.find((s) => s.value === user.state);

    if (!userStateData) return false;

    const userStateFee = GOVERNMENT_FEES.find(
      (fee) => fee.state === userStateData.label,
    );

    return !!userStateFee;
  }, [user.state]);

  const orderedFees = useMemo(() => {
    if (!user.state) {
      return GOVERNMENT_FEES;
    }

    const userStateData = STATES.find((s) => s.value === user.state);
    if (!userStateData) {
      return GOVERNMENT_FEES;
    }

    const userStateFee = GOVERNMENT_FEES.find(
      (fee) => fee.state === userStateData.label,
    );

    if (!userStateFee) {
      return GOVERNMENT_FEES;
    }

    return [
      userStateFee,
      ...GOVERNMENT_FEES.filter((fee) => fee.state !== userStateData.label),
    ];
  }, [user.state]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="gap-4 font-sans sm:max-w-max max-h-[calc(100vh-100px)]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Breakdown of Government Fees
          </DialogTitle>
        </DialogHeader>

        <div className="border rounded-lg overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="">
            <Table>
              <TableHeader>
                <TableRow className="h-[78px] text-base text-[#3F3F3F] font-semibold bg-[#6B7280]/40 border-none hover:bg-[#6B7280]/40">
                  <TableHead className="p-3 rounded-tl-lg whitespace-nowrap">
                    State of Registration
                  </TableHead>
                  <TableHead className="p-3 whitespace-nowrap">
                    2 DSC price <br />
                    (Inclusive of taxes)
                  </TableHead>
                  <TableHead className="p-3 whitespace-nowrap">
                    RUN + PAN/TAN <br />
                    (Inclusive of taxes)
                  </TableHead>
                  <TableHead className="p-3 whitespace-nowrap">
                    State filing fee (Auth <br /> capital up to ₹1 Lakh)
                  </TableHead>
                  <TableHead className="p-3 rounded-tr-lg whitespace-nowrap">
                    Estimated Total <br /> Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderedFees.map((fee, index) => (
                  <TableRow
                    key={fee.state}
                    className={`h-[78px] text-base ${
                      index === 0 && hasUserState
                        ? "font-bold bg-[#58B09C]/80 hover:bg-[#58B09C]/80"
                        : ""
                    }`}
                  >
                    <TableCell
                      className={`p-3 whitespace-nowrap ${
                        index === 0 && hasUserState ? "font-bold" : ""
                      }`}
                    >
                      {fee.state}
                    </TableCell>
                    <TableCell className="p-3">
                      ₹{formatNumber(fee.dscPrice)}
                    </TableCell>
                    <TableCell className="p-3">
                      ₹{formatNumber(fee.runPanTan)}
                    </TableCell>
                    <TableCell className="p-3">
                      ₹{formatNumber(fee.stateFilingFee)}
                    </TableCell>
                    <TableCell className="p-3 font-bold">
                      ₹{formatNumber(fee.total)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { GovtFeesDetails };
