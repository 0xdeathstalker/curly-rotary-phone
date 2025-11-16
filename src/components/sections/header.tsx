"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed left-1/2 top-6 -translate-x-1/2 z-50 w-[min(1345px,calc(100%-20px))] backdrop-blur-md bg-white/80 rounded-2xl border border-[#E5E7EB] flex flex-col min-[920px]:flex-row px-6 py-2.5 md:py-3">
      <div className="flex items-center justify-between w-full min-[920px]:w-auto">
        {/* <div className="h-11 w-[100px]"> */}
        <Image
          src="/logos/taxocity.png"
          alt="taxocity logo"
          width={100}
          height={45}
          className="shrink-0"
        />
        {/* </div> */}

        <Button
          variant="outline"
          className="bg-transparent shadow-none border-[#DEE8F2] hover:bg-transparent min-[920px]:hidden -mr-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      <div className="hidden min-[920px]:flex items-center gap-4 lg:gap-8 ml-auto">
        <NavigationMenu className="font-sans">
          <NavigationMenuList className="flex-none">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs md:text-sm lg:text-base">
                Company Incorporation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-max gap-4">
                  <li>
                    <NavigationMenuLink
                      asChild
                      className="flex-row items-center group"
                    >
                      <Link href="/" className="text-sm lg:text-base">
                        <span>Private Limited Company</span>
                        <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="flex-row items-center group"
                    >
                      <Link href="#" className="text-sm lg:text-base">
                        Sole Proprietorship
                        <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="flex-row items-center group"
                    >
                      <Link href="#" className="text-sm lg:text-base">
                        Partnership Firm
                        <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="flex-row items-center group"
                    >
                      <Link href="#" className="text-sm lg:text-base">
                        One Person Company
                        <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="flex-row items-center group"
                    >
                      <Link href="#" className="text-sm lg:text-base">
                        Limited Liability Partnership
                        <ChevronRight className="size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs md:text-sm lg:text-base">
                GST
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs md:text-sm lg:text-base">
                MCA Compliance
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs md:text-sm lg:text-base">
                Income Tax Return
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          size="lg"
          className="bg-[#F9B934] border border-[#1E293B] text-base text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
        >
          Get Started
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
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
    </header>
  );
}
