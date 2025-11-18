function DifferencesTable() {
  return (
    <div id="difference" className="scroll-mt-24 space-y-4">
      <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
        Difference Between Private Limited Company and Other Business Structures
      </h2>
      <p className="text-lg">
        A private limited company stands out among various business structures
        in India due to its separate legal entity status, limited liability
        protection, and formal company registration process under the Companies
        Act, 2013, regulated by the Ministry of Corporate Affairs (MCA).
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
            <div className="p-4 text-[#1E1E1E]">Compliance Requirements</div>
            <div className="p-4">
              High (ROC filings, financial statements, DIN, DSC)
            </div>
            <div className="p-4">Moderate</div>
            <div className="p-4">Moderate</div>
            <div className="p-4">Minimal</div>
          </div>

          <div className="grid grid-cols-5">
            <div className="p-4 text-[#1E1E1E]">Tax Benefits</div>
            <div className="p-4">Eligible for deductions and incentives</div>
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
            <div className="p-4 text-[#1E1E1E]">Company Incorporation</div>
            <div className="p-4">
              Through SPICe+ with DSC, DIN, registered office address proof
            </div>
            <div className="p-4">Similar process</div>
            <div className="p-4">Different process under LLP Act</div>
            <div className="p-4">No registration required</div>
          </div>

          <div className="grid grid-cols-5">
            <div className="p-4 text-[#1E1E1E]">Registration Authority</div>
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
        This table helps entrepreneurs compare and choose the right business
        entity during company registration in India based on goals, compliance
        requirements, and liability protection.
      </p>
    </div>
  );
}

export { DifferencesTable };
