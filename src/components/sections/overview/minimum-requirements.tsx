function MinimumRequirements() {
  return (
    <div id="requirements" className="scroll-mt-24 space-y-4">
      <h2 className="text-[32px] md:text-5xl text-[#1E293B] font-bold leading-[130%]">
        Minimum Requirements for Pvt Ltd Company
      </h2>
      <p className="md:text-lg">
        For private limited company registration in India, certain legal and
        procedural requirements must be fulfilled under the Companies Act, 2013.
        Meeting these minimum conditions ensures a valid incorporation and
        smooth operation post-registration.
      </p>

      <div className="flex items-start lg:flex-col gap-4 overflow-x-auto">
        <div className="flex items-start gap-4">
          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Minimum Two Directors
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              A private limited company must have at least two directors to be
              registered.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              Directors are responsible for managing the affairs of the company
              and complying with the provisions of the Companies Act, 2013.
            </p>
          </div>
          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Minimum Two Shareholders
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              A minimum of two shareholders is compulsory for incorporation.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              The directors themselves can act as shareholders, so the same
              individuals may hold both roles.
            </p>

            <p className="m-3 text-[#3F3F3F]">
              Shareholders can be either individuals or corporate entities,
              giving flexibility in ownership.
            </p>

            <p className="m-3 text-[#3F3F3F]">
              The maximum number of shareholders in a private limited company is
              restricted to 200.
            </p>
          </div>
          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Registered Office Address
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              A valid registered office address in India must be provided at the
              time of incorporation.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              This address will be used by the Ministry of Corporate Affairs
              (MCA) for sending all legal communications and notices.
            </p>
            <span className="m-3 text-[#3F3F3F] font-bold">
              Documents required:
            </span>
            <p className="m-3 text-[#3F3F3F]">
              Proof of address (electricity bill, water bill, property tax
              receipt, etc.).
            </p>
            <p className="m-3 text-[#3F3F3F]">
              No Objection Certificate (NOC) from the property owner (if rented
              or leased).
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Digital Signature Certificate (DSC)
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              Since the company incorporation process is completely online, all
              forms are filed electronically.{" "}
            </p>
            <p className="m-3 text-[#3F3F3F]">
              Therefore, each proposed director must obtain a Digital Signature
              Certificate (DSC) to digitally sign the incorporation forms.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              A DSC is issued by certified agencies in India and is legally
              valid for signing electronic documents.
            </p>
          </div>

          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Director Identification Number (DIN)
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              A DIN is a unique identification number allotted by the MCA to an
              individual who intends to become a director of a company.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              It ensures transparency and helps track directors’ involvement in
              different companies.
            </p>

            <p className="m-3 text-[#3F3F3F]">
              A DIN is mandatory for all directors before their appointment.
            </p>
          </div>

          <div className="w-[350px] lg:w-1/3">
            <div className="flex items-center p-3 bg-[#58B09C]/10">
              <h1 className="font-semibold text-[#1E293B] md:text-lg">
                Company Name
              </h1>
            </div>
            <p className="m-3 text-[#3F3F3F]">
              The proposed company name must be unique and must not resemble the
              name of any existing company or registered trademark.
            </p>
            <p className="m-3 text-[#3F3F3F]">
              The name must also comply with the naming guidelines prescribed by
              the MCA (e.g., it must include “Private Limited” at the end).
            </p>
            <p className="m-3 text-[#3F3F3F]">
              The name is first applied through the RUN (Reserve Unique Name)
              service or directly in the SPICe+ (INC-32) form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MinimumRequirements };
