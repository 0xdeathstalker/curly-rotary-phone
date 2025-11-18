function TimeRequired() {
  return (
    <div id="time-required" className="scroll-mt-24 space-y-4">
      <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
        Time Required to Register a Private Limited Company
      </h2>
      <p className="md:text-lg">
        Registering a private limited company in India typically takes 10 to 15
        working days, depending on factors like name availability, documentation
        accuracy, and MCA processing speed. Here’s a quick breakdown of the
        process for pvt ltd registration:
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
            <span className="font-bold ">MOA & AOA Drafting (2–3 days):</span>{" "}
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
          <span className="font-bold ">Note:</span> Each step is crucial, and
          delays can occur due to incomplete documents or government backlogs.
        </p>
      </div>
    </div>
  );
}

export { TimeRequired };
