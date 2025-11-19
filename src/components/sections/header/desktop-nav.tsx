import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function DesktopNavigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="font-sans">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">
            Company Incorporation
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/">Privated Company Limited</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/sole-prop-reg">
                    Sole Proprietorship
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/partnership-reg">
                    Partnership Firm
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/opc-reg">
                    One Person Company
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/llp-reg">
                    Limited Liability Partnership
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">
            GST
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/gst-reg">
                    GST Registration
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/gst-return-filing">
                    GST Return filing
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/gst-revoke">
                    GST Revocation/Recovery
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="http://taxocity.com/product/gst-cancel">
                    GST Cancellation
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">
            MCA Compliance
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/appoint-director">
                    Appointment of Director
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/change-add">
                    Change Address
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/change-obj">
                    Change Objective/Activity
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/close-pvt-ltd">
                    Close the Pvt. Ltd. Company
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/director-removal">
                    Removal of Director
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/increase-auth-cap">
                    Increased Authorized Share Capital
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">
            ITR
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="https://taxocity.com/product/business-itr">
                    Backlog
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { DesktopNavigation };
