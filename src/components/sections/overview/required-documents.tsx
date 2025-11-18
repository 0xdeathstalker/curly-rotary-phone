function RequiredDocuments() {
  return (
    <div id="documents" className="scroll-mt-24 space-y-4">
      <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
        Documents Required
      </h2>
      <p className="md:text-lg mb-14">
        The documents required for Private Limited Company registration in India
        serve to validate the identity, address, and authority of the directors
        and shareholders, as mandated by the Ministry of Corporate Affairs (MCA)
        under the Companies Act.
      </p>

      <div className="space-y-8 md:text-lg">
        <div>
          <h4 className="font-bold mb-1">For Indian Nationals:</h4>
          <ul className="space-y-0.5">
            <li className="leading-tight flex">
              <span className="mr-2 shrink-0">•</span>
              <span>
                <span className="font-bold">Identity Proof:</span> PAN Card
                (mandatory), Passport, Aadhar Card, Voter ID, or Driver's
                License
              </span>
            </li>
            <li className="leading-tight flex">
              <span className="mr-2 shrink-0">•</span>
              <span>
                <span className="font-bold">Address Proof:</span> Recent Utility
                Bills or Bank Statements (not older than 2 months)
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
                <span className="font-bold">Identity Proof:</span> Passport
                (mandatory)
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
                <span className="font-bold">Board Resolution:</span> Signed
                resolution authorizing investment in the new company
              </span>
            </li>
            <li className="leading-tight flex">
              <span className="mr-2 shrink-0">•</span>
              <span>
                <span className="font-bold">Incorporation Certificate:</span>{" "}
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
                <span className="font-bold">Rent Agreement or NOC:</span> Rental
                Agreement and No Objection Certificate from the property owner
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
                <span className="font-bold">Photographs:</span> Passport-size
                photos of all directors and shareholders
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { RequiredDocuments };
