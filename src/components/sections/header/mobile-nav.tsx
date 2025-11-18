import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MobileNavigation({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "font-sans w-full min-[920px]:hidden border-t border-[#E5E7EB] overflow-hidden transition-all duration-300 ease-in-out",
        isOpen
          ? "max-h-[600px] pt-4 mt-3 opacity-100"
          : "max-h-0 mt-0 opacity-0 border-t-transparent"
      )}
    >
      <nav className="flex flex-col gap-3">
        <div className="border-b border-gray-200 pb-3">
          <button
            type="button"
            className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Company Incorporation
          </button>
          <div className="pl-3 mt-2 flex flex-col gap-1">
            <Link
              href="/"
              className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
            >
              Private Limited Company
              <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
            </Link>
            <Link
              href="#"
              className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
            >
              Sole Proprietorship
              <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
            </Link>
            <Link
              href="#"
              className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
            >
              Partnership Firm
              <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
            </Link>
            <Link
              href="#"
              className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
            >
              One Person Company
              <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
            </Link>
            <Link
              href="#"
              className="text-sm py-2 px-3 group rounded-lg transition-colors flex items-center"
            >
              Limited Liability Partnership
              <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          GST
        </button>

        <button
          type="button"
          className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          MCA Compliance
        </button>

        <button
          type="button"
          className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Income Tax Return
        </button>

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
