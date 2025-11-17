"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";

function Overview() {
  const [activeSection, setActiveSection] = React.useState("overview");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-28 px-4 lg:px-16 mx-auto">
      <div className="flex gap-7 relative lg:gap-14">
        {/* Sticky Sidebar - Hidden on mobile */}
        <div className="hidden lg:block sticky shrink-0">
          <div className="bg-[#eef4f9] rounded-lg sticky top-24">
            <SidebarItem
              title="Private Limited Company"
              active={activeSection === "overview"}
              onClick={() => scrollToSection("overview")}
            />
            <SidebarItem
              title="Pvt Types"
              active={activeSection === "types"}
              onClick={() => scrollToSection("types")}
            />
            <SidebarItem
              title="Requirements"
              active={activeSection === "requirements"}
              onClick={() => scrollToSection("requirements")}
            />
            <SidebarItem
              title="Pvt Process"
              active={activeSection === "process"}
              onClick={() => scrollToSection("process")}
            />
            <SidebarItem
              title="Documents"
              active={activeSection === "documents"}
              onClick={() => scrollToSection("documents")}
            />
            <SidebarItem
              title="Benefits"
              active={activeSection === "benefits"}
              onClick={() => scrollToSection("benefits")}
            />
            <SidebarItem
              title="FAQ"
              active={activeSection === "faq"}
              onClick={() => scrollToSection("faq")}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-16 min-w-0">
          <div id="overview" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Overview
            </h2>
            <p className="md:text-lg">
              Private limited company registration in India provides limited
              liability, legal independence, and access to tax benefits.
              Governed by the Companies Act, 2013, it requires a DSC, DIN, and
              documents like ID and address proof. The SPICe+ form enables
              combined application for name approval, incorporation, PAN, TAN,
              and GST. Once approved by the RoC, you receive a Certificate of
              Incorporation, allowing the company to operate legally, own
              assets, and sign contracts. Compliance tasks like annual returns
              and financial reporting are mandatory post-registration. Taxocity
              streamlines the entire process by providing comprehensive
              end-to-end support for private limited company registration, legal
              documentation, and regulatory compliance. Our expert team ensures
              every step is handled efficiently and accurately, while
              maintaining complete transparency in pricing with no hidden costs.
            </p>
          </div>

          <div id="types" className="scroll-mt-24 space-y-4">
            <h2 className="text-black text-[32px] md:text-5xl font-bold leading-[130%]">
              Types of Private Limited Company
            </h2>

            <p className="md:text-lg">
              Choosing the right type of private limited company is essential
              for legal protection, financial planning, and operational
              flexibility. In India, private companies are categorized based on
              member liability and capital structure. Below are the three key
              types:
            </p>

            <div className="space-y-2">
              <div>
                <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                  <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                    Company Limited by shares
                  </h1>
                </div>
                <p className="my-3 text-[#3F3F3F]">
                  A company limited by shares is the most widely used structure.
                  Here, the liability of shareholders is limited to the unpaid
                  amount on their subscribed shares. This model protects
                  personal assets and supports ownership through equity. It is
                  ideal for businesses that plan to raise capital from private
                  investors or co-founders without risking personal finances.
                </p>
              </div>

              <div>
                <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                  <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                    Company limited by Guarantee
                  </h1>
                </div>
                <p className="my-3 text-[#3F3F3F]">
                  Companies limited by guarantee do not have share capital.
                  Instead, members pledge to pay a specific amount in case of
                  liquidation. This structure is suitable for non-profits,
                  foundations, and social enterprises that need legal
                  recognition without focusing on profit distribution. Members’
                  liability is limited to their guarantee amount.
                </p>
              </div>

              <div>
                <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                  <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                    Unlimited Companies
                  </h1>
                </div>
                <p className="my-3 text-[#3F3F3F]">
                  In an unlimited company, there is no limit to the liability of
                  its members. If the company faces financial losses or debts,
                  members are personally responsible for covering them. This
                  structure is rarely used but can be suitable for closely held
                  entities where members are comfortable with full liability and
                  want maximum control.
                </p>
              </div>
            </div>
          </div>

          <div id="requirements" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Minimum Requirements for Pvt Ltd Company
            </h2>
            <p className="md:text-lg">
              For private limited company registration in India, certain legal
              and procedural requirements must be fulfilled under the Companies
              Act, 2013. Meeting these minimum conditions ensures a valid
              incorporation and smooth operation post-registration.
            </p>

            <div className="flex items-start lg:flex-col gap-4 overflow-x-auto">
              <div className="flex items-start gap-4">
                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Minimum Two Directors
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    A private limited company must have at least two directors
                    to be registered.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    Directors are responsible for managing the affairs of the
                    company and complying with the provisions of the Companies
                    Act, 2013.
                  </p>
                </div>
                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Minimum Two Shareholders
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    A minimum of two shareholders is compulsory for
                    incorporation.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    The directors themselves can act as shareholders, so the
                    same individuals may hold both roles.
                  </p>

                  <p className="m-3 text-[#3F3F3F]">
                    Shareholders can be either individuals or corporate
                    entities, giving flexibility in ownership.
                  </p>

                  <p className="m-3 text-[#3F3F3F]">
                    The maximum number of shareholders in a private limited
                    company is restricted to 200.
                  </p>
                </div>
                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Registered Office Address
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    A valid registered office address in India must be provided
                    at the time of incorporation.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    This address will be used by the Ministry of Corporate
                    Affairs (MCA) for sending all legal communications and
                    notices.
                  </p>
                  <span className="m-3 text-[#3F3F3F] font-bold">
                    Documents required:
                  </span>
                  <p className="m-3 text-[#3F3F3F]">
                    Proof of address (electricity bill, water bill, property tax
                    receipt, etc.).
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    No Objection Certificate (NOC) from the property owner (if
                    rented or leased).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Digital Signature Certificate (DSC)
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    Since the company incorporation process is completely
                    online, all forms are filed electronically.{" "}
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    Therefore, each proposed director must obtain a Digital
                    Signature Certificate (DSC) to digitally sign the
                    incorporation forms.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    A DSC is issued by certified agencies in India and is
                    legally valid for signing electronic documents.
                  </p>
                </div>

                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Director Identification Number (DIN)
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    A DIN is a unique identification number allotted by the MCA
                    to an individual who intends to become a director of a
                    company.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    It ensures transparency and helps track directors’
                    involvement in different companies.
                  </p>

                  <p className="m-3 text-[#3F3F3F]">
                    A DIN is mandatory for all directors before their
                    appointment.
                  </p>
                </div>

                <div className="w-[350px] lg:w-1/3">
                  <div className="flex items-center p-3 bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
                      Company Name
                    </h1>
                  </div>
                  <p className="m-3 text-[#3F3F3F]">
                    The proposed company name must be unique and must not
                    resemble the name of any existing company or registered
                    trademark.
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    The name must also comply with the naming guidelines
                    prescribed by the MCA (e.g., it must include “Private
                    Limited” at the end).
                  </p>
                  <p className="m-3 text-[#3F3F3F]">
                    The name is first applied through the RUN (Reserve Unique
                    Name) service or directly in the SPICe+ (INC-32) form.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="process" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Incorporation Process
            </h2>
            <p className="md:text-lg mb-2">
              (As per the Companies Act, 2013, regulated by the Ministry of
              Corporate Affairs – MCA)
            </p>

            <div className="space-y-8 md:text-lg">
              <div>
                <h4 className="font-bold mb-1">
                  Step 1: Obtain Digital Signature Certificate (DSC)
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      All proposed directors must have a Digital Signature
                      Certificate (DSC).
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      The DSC is used for signing all company incorporation
                      documents online.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 2: Apply for Director Identification Number (DIN)
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Every director must obtain a Director Identification
                      Number (DIN).
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      This number uniquely identifies directors and is mandatory
                      for appointment.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 3: Company Name Approval (SPICe+ Part A)
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Choose a unique name for the company.</span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Apply through SPICe+ Part A on the MCA portal.</span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      The name should not be identical or similar to existing
                      companies or registered trademarks.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 4: Prepare Incorporation Documents
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Collect and prepare:</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Identity Proof (PAN, Passport, Aadhaar, etc.)</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Address Proof (Voter ID, Driving License, etc.)</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Registered Office Proof (Rent Agreement, NOC from owner,
                      or utility bill).
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 5: File SPICe+ Part B, AGILE-PRO, eMOA, eAOA
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Submit details of:</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Authorized share capital</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Company's objectives</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Internal rules (through eMOA & eAOA)</span>
                  </li>
                  <li className="leading-tight flex pl-6">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Linked forms like AGILE-PRO include GST, EPFO & ESIC
                      registrations.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 6: PAN, TAN & GST Application
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      PAN (Permanent Account Number) and TAN (Tax Deduction
                      Account Number) are automatically generated.
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Optionally, apply for GST registration if your business
                      requires it.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 7: Verification by RoC & Certificate of Incorporation
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      The Registrar of Companies (RoC) verifies all forms.
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      On approval, the company receives a Certificate of
                      Incorporation (COI) with a unique Corporate Identification
                      Number (CIN).
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">
                  Step 8: Post-Incorporation Compliance
                </h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Open a bank account in the company's name.</span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>Issue share certificates to shareholders.</span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Maintain proper books of accounts and file annual returns.
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      Ensure compliance with MCA & Income Tax regulations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="documents" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Documents Required
            </h2>
            <p className="md:text-lg mb-14">
              The documents required for Private Limited Company registration in
              India serve to validate the identity, address, and authority of
              the directors and shareholders, as mandated by the Ministry of
              Corporate Affairs (MCA) under the Companies Act.
            </p>

            <div className="space-y-8 md:text-lg">
              <div>
                <h4 className="font-bold mb-1">For Indian Nationals:</h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Identity Proof:</span> PAN
                      Card (mandatory), Passport, Aadhar Card, Voter ID, or
                      Driver's License
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Address Proof:</span> Recent
                      Utility Bills or Bank Statements (not older than 2 months)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">For Foreign Nationals</h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Identity Proof:</span>{" "}
                      Passport (mandatory)
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Address Proof:</span> Driver's
                      License, Bank Statement, or Residence Card
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">For Corporate Shareholders</h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Board Resolution:</span>{" "}
                      Signed resolution authorizing investment in the new
                      company
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Incorporation Certificate:
                      </span>{" "}
                      Legal proof of registration of the parent company
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">Registered Office Proof</h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Utility Bill:</span> Recent
                      Electricity Bill or Property Tax Receipt (within 30 days)
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Rent Agreement or NOC:</span>{" "}
                      Rental Agreement and No Objection Certificate from the
                      property owner
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Memorandum of Association (MoA):
                      </span>{" "}
                      Defines the company's business objectives
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Articles of Association (AoA):
                      </span>{" "}
                      Lays out internal governance rules
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Declaration and Consent Forms:
                      </span>{" "}
                      Includes Form INC-9 and DIR-2, confirming compliance and
                      director consent
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Digital Signature Certificate (DSC):
                      </span>{" "}
                      Required for all proposed directors for online filing
                    </span>
                  </li>
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">
                        Director Identification Number (DIN):
                      </span>{" "}
                      Mandatory unique number for each director
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-1">Common for All</h4>
                <ul className="space-y-0.5">
                  <li className="leading-tight flex">
                    <span className="mr-2 shrink-0">•</span>
                    <span>
                      <span className="font-bold">Photographs:</span>{" "}
                      Passport-size photos of all directors and shareholders
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-28 px-0 md:px-16 fmd:mx-0 rounded-3xl">
            <Rating
              rating={4.8}
              starSize="size-6 md:size-10"
              textSize="text-lg md:text-3xl"
              dividerSize="h-6 md:h-7"
            />

            <div className="space-y-6 flex flex-col items-center justify-center text-[#F9FAFB]">
              <h1 className="text-2xl md:text-5xl text-center leading-[120%] font-bold max-w-[310px] md:max-w-3xl">
                Ready to register your company?
                <br />
                <span className="text-[#F9B934]">Get expert help now.</span>
              </h1>

              <p className="md:text-2xl max-w-[310px] md:max-w-max text-center">
                India’s highest-rated legal tax and compliance platform.
              </p>

              <Button
                size="lg"
                className="w-3xs bg-[#F9B934] border border-[#1E293B] text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div id="time-required" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Time Required to Register a Private Limited Company
            </h2>
            <p className="md:text-lg">
              Registering a private limited company in India typically takes 10
              to 15 working days, depending on factors like name availability,
              documentation accuracy, and MCA processing speed. Here’s a quick
              breakdown of the process for pvt ltd registration:
            </p>
            <div className="md:text-lg space-y-8">
              <ul>
                <li>
                  <span className="font-bold ">Name Approval (3–4 days):</span>{" "}
                  Reserve your company name through the MCA portal.
                </li>
                <span className="font-bold ">
                  Director Identification Number (DIN) (3 days):
                </span>{" "}
                Obtain DIN for all proposed directors.
                <li>
                  <span className="font-bold ">
                    Director Identification Number (DIN) (3 days):
                  </span>{" "}
                  Obtain DIN for all proposed directors.
                </li>
                <li>
                  <span className="font-bold ">
                    Digital Signature Certificate (DSC) (2 days):
                  </span>{" "}
                  Secure a DSC for each director for digital filings.
                </li>
                <li>
                  <span className="font-bold ">
                    MOA & AOA Drafting (2–3 days):
                  </span>{" "}
                  Prepare the Memorandum and Articles of Association.
                </li>
                <li>
                  <span className="font-bold ">
                    Filing Incorporation Documents (5–7 days):
                  </span>{" "}
                  Submit SPICe+ forms and required documents to the MCA.
                </li>
                <li>
                  <span className="font-bold ">
                    Certificate of Incorporation (2–3 days):
                  </span>{" "}
                  Upon approval, the RoC issues your incorporation certificate.
                </li>
              </ul>

              <p>
                <span className="font-bold ">Note:</span> Each step is crucial,
                and delays can occur due to incomplete documents or government
                backlogs.
              </p>
            </div>
          </div>

          <div id="govt-fees" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Pvt Ltd Company Registration Govt Fees
            </h2>
            <p className="md:text-lg">
              Government fees for Private Limited Company registration vary from
              state to state and are primarily based on the company’s authorised
              capital. Additional charges may apply depending on stamp duty,
              filing fees, and digital signature requirements as per the
              jurisdiction. The final cost may differ depending on
              state-specific regulations and updates issued by the Ministry of
              Corporate Affairs (MCA).
            </p>
          </div>

          <div id="benefits" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Benefits of a Private Limited Company In India
            </h2>
            <p className="text-lg">
              A Private Limited Company (Pvt Ltd) offers a range of advantages
              that make it a popular choice for entrepreneurs and startups:
            </p>

            <div className="hidden md:flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Limited Liability
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Shareholders are only liable to the extent of their
                    shareholding personal assets are protected.
                  </p>
                </div>
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Separate Legal Entity
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Registration adds credibility, helping in building trust
                    with clients, partners, and investors.
                  </p>
                </div>
              </div>

              <div className="flex items-stretch gap-4">
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Easier Access to Capital
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Pvt Ltd companies can raise funds through equity, loans, or
                    venture capital, attracting investors more easily.
                  </p>
                </div>
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Tax Benefits
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Eligible for lower corporate tax rates and deductions on
                    business expenses like salaries, rent, and utilities.
                  </p>
                </div>
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Professional Image
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Registration adds credibility, helping in building trust
                    with clients, partners, and investors.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Perpetual Existence
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    The company remains unaffected by changes in ownership or
                    management ensuring business continuity.
                  </p>
                </div>
                <div className="border border-[#6B7280]/42 rounded-md">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Easy Share Transfer
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Shares can be transferred with shareholder approval,
                    offering flexibility in ownership without disrupting
                    operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden overflow-x-auto">
              <div className="flex gap-4 w-max">
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Limited Liability
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Shareholders are only liable to the extent of their
                    shareholding personal assets are protected.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Separate Legal Entity
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Registration adds credibility, helping in building trust
                    with clients, partners, and investors.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Easier Access to Capital
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Pvt Ltd companies can raise funds through equity, loans, or
                    venture capital, attracting investors more easily.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Tax Benefits
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Eligible for lower corporate tax rates and deductions on
                    business expenses like salaries, rent, and utilities.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Professional Image
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Registration adds credibility, helping in building trust
                    with clients, partners, and investors.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Perpetual Existence
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    The company remains unaffected by changes in ownership or
                    management ensuring business continuity.
                  </p>
                </div>
                <div className="w-[350px] h-[147px] border border-[#6B7280]/42 rounded-md shrink-0">
                  <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
                    <h1 className="font-semibold text-[#3F3F3F] text-lg">
                      Easy Share Transfer
                    </h1>
                  </div>
                  <p className="p-3 text-[#3F3F3F]">
                    Shares can be transferred with shareholder approval,
                    offering flexibility in ownership without disrupting
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="difference" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Difference Between Private Limited Company and Other Business
              Structures
            </h2>
            <p className="text-lg">
              A private limited company stands out among various business
              structures in India due to its separate legal entity status,
              limited liability protection, and formal company registration
              process under the Companies Act, 2013, regulated by the Ministry
              of Corporate Affairs (MCA).
            </p>

            <div className="overflow-x-auto">
              <div className="border border-[#6B7280]/42 min-w-[877px]">
                <div className="grid grid-cols-5 items-center bg-[#EEF4F9] border-b border-gray-300">
                  <div className="p-4 font-bold text-[#1E1E1E]">Criteria</div>
                  <div className="p-4 font-bold text-[#1E1E1E]">
                    Private Limited Company (PVT)
                  </div>
                  <div className="p-4 font-bold text-[#1E1E1E]">
                    One Person Company (OPC)
                  </div>
                  <div className="p-4 font-bold text-[#1E1E1E]">
                    Limited Liability Partnership (LLP)
                  </div>
                  <div className="p-4 font-bold text-[#1E1E1E]">
                    Sole Proprietorship
                  </div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Legal Status</div>
                  <div className="p-4">Separate legal entity</div>
                  <div className="p-4">Separate legal entity</div>
                  <div className="p-4">Separate legal entity</div>
                  <div className="p-4">Not a separate legal entity</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Liability</div>
                  <div className="p-4">Limited to shareholding</div>
                  <div className="p-4">Limited</div>
                  <div className="p-4">Limited</div>
                  <div className="p-4">Unlimited liability</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Number of Members</div>
                  <div className="p-4">2–200 members</div>
                  <div className="p-4">1 person only</div>
                  <div className="p-4">Minimum 2 partners</div>
                  <div className="p-4">1 owner</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">
                    Compliance Requirements
                  </div>
                  <div className="p-4">
                    High (ROC filings, financial statements, DIN, DSC)
                  </div>
                  <div className="p-4">Moderate</div>
                  <div className="p-4">Moderate</div>
                  <div className="p-4">Minimal</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Tax Benefits</div>
                  <div className="p-4">
                    Eligible for deductions and incentives
                  </div>
                  <div className="p-4">Similar to Pvt Ltd</div>
                  <div className="p-4">Some benefits applicable</div>
                  <div className="p-4">Taxed as personal income</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Funding Scope</div>
                  <div className="p-4">
                    Easy to raise from financial institutions and investors
                  </div>
                  <div className="p-4">Limited</div>
                  <div className="p-4">Difficult</div>
                  <div className="p-4">Not preferred by investors</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">
                    Company Incorporation
                  </div>
                  <div className="p-4">
                    Through SPICe+ with DSC, DIN, registered office address
                    proof
                  </div>
                  <div className="p-4">Similar process</div>
                  <div className="p-4">Different process under LLP Act</div>
                  <div className="p-4">No registration required</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">
                    Registration Authority
                  </div>
                  <div className="p-4">Registrar of Companies (RoC)</div>
                  <div className="p-4">RoC</div>
                  <div className="p-4">RoC</div>
                  <div className="p-4">No formal authority</div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="p-4 text-[#1E1E1E]">Compliance Cost</div>
                  <div className="p-4">
                    Moderate to High (professional fees, government fees)
                  </div>
                  <div className="p-4">Moderate</div>
                  <div className="p-4">Moderate</div>
                  <div className="p-4">Low</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-[#3F3F3F]">
              This table helps entrepreneurs compare and choose the right
              business entity during company registration in India based on
              goals, compliance requirements, and liability protection.
            </p>
          </div>

          <div id="faq" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-lg">
                  What is the minimum requirement to register a Private Limited
                  Company in India?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Content comes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base md:text-lg">
                  How long does the registration process take with TaxoCity?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Content comes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base md:text-lg">
                  What documents are required for company registration?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Content comes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base md:text-lg">
                  Are there any hidden charges apart from the package fee?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Content comes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base md:text-lg">
                  What post-incorporation support does TaxoCity provide?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Content comes here
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: forced behaviour
    // biome-ignore lint/a11y/useKeyWithClickEvents: forced behaviour
    <div
      className={`px-6 py-6 cursor-pointer border-b last:border-b-0 border-[rgba(29,54,77,0.4)] ${
        active
          ? "bg-linear-to-r from-[rgba(107,114,128,0.42)] to-[rgba(238,244,249,0)] first:rounded-tl-lg last:rounded-bl-lg"
          : ""
      }`}
      onClick={onClick}
    >
      <p
        className={`text-lg font-sans ${
          active ? "font-bold" : "font-normal"
        } text-black`}
      >
        {title}
      </p>
    </div>
  );
}

export { Overview };
