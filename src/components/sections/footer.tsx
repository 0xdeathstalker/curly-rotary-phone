import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer className={cn("font-sans", roboto.className)}>
      <div className="max-w-[1256px] mx-auto px-5 md:px-16 py-20">
        <div className="grid grid-cols-2 gap-8 md:flex md:items-stretch md:justify-between">
          {/* Brand Section */}
          <div className="col-span-2 flex flex-col items-start justify-between md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image
                src="/logos/taxocity.png"
                alt="taxocity logo"
                width={100}
                height={45}
                className="shrink-0"
              />
            </Link>
            <div className="space-y-6 text-sm text-black">
              <p className="font-semibold">
                Taxocity Enterprise Private Limited
              </p>
              <p>CIN: U70200DL2025PTC453592</p>
            </div>
          </div>

          {/* Company Incorporation */}
          <div>
            <h3 className="font-semibold text-black mb-4">
              Company Incorporation
            </h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link One
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Two
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Three
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Four
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Five
                </Link>
              </li>
            </ul>
          </div>

          {/* GST */}
          <div>
            <h3 className="font-semibold text-black mb-4">GST</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Six
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Seven
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Eight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Nine
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Ten
                </Link>
              </li>
            </ul>
          </div>

          {/* MCA Compliance */}
          <div>
            <h3 className="font-semibold text-black mb-4">MCA Compliance</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Eleven
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Twelve
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Thirteen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Fourteen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Fifteen
                </Link>
              </li>
            </ul>
          </div>

          {/* ITR */}
          <div>
            <h3 className="font-semibold text-black mb-4">ITR</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Sixteen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Seventeen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Eighteen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Nineteen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Link Twenty
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16">
          <p className="text-sm text-black font-semibold mb-6">
            By continuing past this page, you agree to our{" "}
            <Link
              href="https://taxocity.com/terms-conditions"
              target="_blank"
              className="text-primary hover:underline"
            >
              Terms of Service
            </Link>
            ,{" "}
            <Link
              href="https://taxocity.com/privacy-policy"
              target="_blank"
              className="text-primary hover:underline"
            >
              Cookie Policy
            </Link>
            ,{" "}
            <Link
              href="https://taxocity.com/privacy-policy/"
              target="_blank"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link
              href="https://taxocity.com/refund-and-return-policy"
              target="_blank"
              className="text-primary hover:underline"
            >
              Refund Policy
            </Link>
            .
          </p>
          <p className="font-semibold text-sm text-black mb-16">
            <Link
              href="https://taxocity.com"
              target="_blank"
              className="hover:underline"
            >
              Taxocity Enterprise Private Limited.
            </Link>{" "}
            All rights reserved.
          </p>
          <div className="mb-16">
            <h4 className="text-sm font-semibold text-black mb-2">
              Website Disclaimer:
            </h4>
            <p className="text-sm text-black leading-tight font-medium">
              This website is privately operated and not affiliated with any
              government entity. We do not represent or are affiliated with,
              endorsed by, or in any way connected to any government body or
              department. The form provided is not for official registration
              purposes; rather, it's designed to gather information from our
              clients to help us better understand their business or compliance
              needs. By continuing to use this website, you acknowledge that we
              are a private company. We offer assistance based on customer
              requests, and the fees collected on this website are charged as a
              platform fee.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black">
            <div className="flex items-center gap-6">
              <p className="text-sm text-black mb-4 md:mb-0">
                © 2025 Taxocity. All rights reserved.
              </p>
              <Link
                href="#"
                className="text-sm text-black hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-black hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-black hover:text-primary transition-colors"
              >
                Cookies Settings
              </Link>
            </div>

            <div className="flex gap-4 ml-4">
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                >
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                >
                  <title>X (Twitter)</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
