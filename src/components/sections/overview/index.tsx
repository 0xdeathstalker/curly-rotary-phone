"use client";

import { CTASection } from "@/components/sections/cta-section";
import { Benefits } from "./benefits";
import { DifferencesTable } from "./differences-table";
import { FAQ } from "./faq";
import { IncorporationProcess } from "./incorporation-process";
import { MinimumRequirements } from "./minimum-requirements";
import { RequiredDocuments } from "./required-documents";
import { Sidebar } from "./sidebar";
import { TimeRequired } from "./time-required";
import { TypesOfCompanies } from "./types-of-companies";

function Overview() {
  return (
    <div className="py-28 px-4 lg:px-16 mx-auto max-w-[1345px]">
      <div className="flex gap-7 relative lg:gap-14">
        {/* Sticky Sidebar - Hidden on mobile */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 flex flex-col gap-16 min-w-0">
          <div id="overview" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E293B] font-bold leading-[130%]">
              Overview
            </h2>
            <p className="md:text-lg text-[#1E1E1E]">
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

          <TypesOfCompanies />

          <MinimumRequirements />

          <IncorporationProcess />

          <RequiredDocuments />

          <CTASection className="rounded-3xl">
            <h1 className="text-2xl md:text-5xl text-center leading-[120%] font-bold max-w-[310px] md:max-w-3xl">
              Ready to register your company?
              <br />
              <span className="text-[#F9B934]">Get expert help now.</span>
            </h1>
          </CTASection>

          <TimeRequired />

          <div id="govt-fees" className="scroll-mt-24 space-y-4">
            <h2 className="text-[32px] md:text-5xl text-[#1E293B] font-bold leading-[130%]">
              Pvt Ltd Company Registration Govt Fees
            </h2>
            <p className="md:text-lg text-[#1A1A1A]">
              Government fees for Private Limited Company registration vary from
              state to state and are primarily based on the company’s authorised
              capital. Additional charges may apply depending on stamp duty,
              filing fees, and digital signature requirements as per the
              jurisdiction. The final cost may differ depending on
              state-specific regulations and updates issued by the Ministry of
              Corporate Affairs (MCA).
            </p>
          </div>

          <Benefits />

          <DifferencesTable />

          <FAQ />
        </div>
      </div>
    </div>
  );
}

export { Overview };
