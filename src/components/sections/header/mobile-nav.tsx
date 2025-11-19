import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MobileNavigation({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "font-sans w-full min-[920px]:hidden border-t border-[#E5E7EB] overflow-hidden transition-all duration-300 ease-in-out",
        isOpen
          ? "max-h-[600px] mt-3 opacity-100"
          : "max-h-0 mt-0 opacity-0 border-t-transparent"
      )}
    >
      <nav className="flex flex-col gap-3">
        <div className="">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="border-b-[#E5E7EB]"
              value="company incorporation"
            >
              <AccordionTrigger className="text-base items-center hover:no-underline justify-start">
                Company Incorporation
                <ChevronRight className="group-data-[state=open]:rotate-90 pointer-events-none size-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="/"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Private Limited Company
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/sole-prop-reg"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Sole Proprietorship
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/partnership-reg"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Partnership Firm
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/opc-reg"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  One Person Company
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/llp-reg"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Limited Liability Partnership
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-[#E5E7EB]" value="gst">
              <AccordionTrigger className="text-base items-center hover:no-underline justify-start">
                GST
                <ChevronRight className="group-data-[state=open]:rotate-90 pointer-events-none size-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="https://taxocity.com/product/gst-reg"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  GST Registration
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/gst-return-filing"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  GST Return Filing
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/gst-revoke"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  GST Revocation/Recovery
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="http://taxocity.com/product/gst-cancel"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  GST Cancellation
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b-[#E5E7EB]"
              value="mca compliance"
            >
              <AccordionTrigger className="text-base items-center hover:no-underline justify-start">
                MCA Compliance
                <ChevronRight className="group-data-[state=open]:rotate-90 pointer-events-none size-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="https://taxocity.com/product/appoint-director"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Appointmet of Director
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/change-add"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Change Address
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/change-obj"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Change Objective/Activity
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/close-pvt-ltd"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Close the Pvt. Ltd. Company
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/director-removal"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Removal of Director
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
                <Link
                  href="https://taxocity.com/product/increase-auth-cap"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Increase Authorised Share Capital
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-[#E5E7EB]" value="itr">
              <AccordionTrigger className="text-base items-center hover:no-underline justify-start">
                ITR
                <ChevronRight className="group-data-[state=open]:rotate-90 pointer-events-none size-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="https://taxocity.com/product/business-itr"
                  className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
                >
                  Business ITR
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Button
          size="lg"
          className="bg-[#F9B934] border border-[#1E293B] text-base text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors w-full mt-2"
        >
          Get Started
        </Button>
      </nav>
    </div>
  );
}

export { MobileNavigation };
