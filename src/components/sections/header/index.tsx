"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";

import { useModalOpen } from "@/context/modal";
import { DesktopNavigation } from "./desktop-nav";
import { MobileNavigation } from "./mobile-nav";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalState = useModalOpen();

  return (
    <header className="fixed left-1/2 top-6 -translate-x-1/2 z-50 w-[min(1345px,calc(100%-20px))] backdrop-blur-md bg-white/80 rounded-2xl border border-[#E5E7EB] flex flex-col min-[920px]:flex-row px-6 py-2.5 md:py-3">
      <div className="flex items-center justify-between w-full min-[920px]:w-auto">
        <Link href="/">
          <Image
            src="/logos/taxocity.png"
            alt="taxocity logo"
            width={100}
            height={45}
            className="shrink-0"
          />
        </Link>

        <Button
          variant="outline"
          className="bg-transparent shadow-none border-[#DEE8F2] hover:bg-transparent min-[920px]:hidden -mr-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      <div className="hidden min-[920px]:flex items-center gap-4 lg:gap-8 ml-auto">
        <DesktopNavigation />

        <Button
          size="lg"
          className="bg-[#F9B934] border border-[#1E293B] text-base text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
          onClick={() => {
            modalState.setModalSource("header");
            modalState.setIsOpen(true);
          }}
        >
          Get Started
        </Button>
      </div>

      <MobileNavigation isOpen={isOpen} />
    </header>
  );
}
