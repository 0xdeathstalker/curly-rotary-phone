import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function DesktopNavigation() {
  return (
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
                    <ChevronRight className="text-[#1A1A1A] size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="flex-row items-center group"
                >
                  <Link href="#" className="text-sm lg:text-base">
                    Sole Proprietorship
                    <ChevronRight className="text-[#1A1A1A] size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="flex-row items-center group"
                >
                  <Link href="#" className="text-sm lg:text-base">
                    Partnership Firm
                    <ChevronRight className="text-[#1A1A1A] size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="flex-row items-center group"
                >
                  <Link href="#" className="text-sm lg:text-base">
                    One Person Company
                    <ChevronRight className="text-[#1A1A1A] size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="flex-row items-center group"
                >
                  <Link href="#" className="text-sm lg:text-base">
                    Limited Liability Partnership
                    <ChevronRight className="text-[#1A1A1A] size-4 opacity-0 group-hover:opacity-60 -translate-x-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
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
  );
}

export { DesktopNavigation };
