import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-1/2 top-6 -translate-x-1/2 z-50 w-[min(1345px,calc(100%-20px))] backdrop-blur-md bg-[rgba(255,255,255,0.87)] rounded-2xl border border-[rgba(107,114,128,0.42)] flex items-center justify-between px-6 py-2.5 md:py-3">
      {/* <div className="h-11 w-[100px]"> */}
      <Image
        src="/logos/taxocity.png"
        alt="taxocity logo"
        width={100}
        height={45}
        className="shrink-0"
      />
      {/* </div> */}

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <div className="flex gap-3 lg:gap-8">
          <NavItem title="Company Incorporation" />
          <NavItem title="GST" />
          <NavItem title="MCA Compliance" />
          <NavItem title="ITR" />
        </div>
        <Button
          size="lg"
          className="bg-[#F9B934] border border-[#1E293B] text-base text-black px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
        >
          Get Started
        </Button>
      </div>

      <Button variant="ghost" className="md:hidden -mr-2">
        <Menu className="size-6" />
      </Button>
    </header>
  );
}

function NavItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
      <span className="font-sans text-xs md:text-sm lg:text-base">{title}</span>
      <ChevronDown className="size-5" />
    </div>
  );
}
