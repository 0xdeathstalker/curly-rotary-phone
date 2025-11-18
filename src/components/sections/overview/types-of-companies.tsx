function TypesOfCompanies() {
  return (
    <div id="types" className="scroll-mt-24 space-y-4">
      <h2 className="text-black text-[32px] md:text-5xl font-bold leading-[130%]">
        Types of Private Limited Company
      </h2>

      <p className="md:text-lg">
        Choosing the right type of private limited company is essential for
        legal protection, financial planning, and operational flexibility. In
        India, private companies are categorized based on member liability and
        capital structure. Below are the three key types:
      </p>

      <div className="space-y-2">
        <div>
          <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
            <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
              Company Limited by shares
            </h1>
          </div>
          <p className="my-3 text-[#3F3F3F]">
            A company limited by shares is the most widely used structure. Here,
            the liability of shareholders is limited to the unpaid amount on
            their subscribed shares. This model protects personal assets and
            supports ownership through equity. It is ideal for businesses that
            plan to raise capital from private investors or co-founders without
            risking personal finances.
          </p>
        </div>

        <div>
          <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
            <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
              Company limited by Guarantee
            </h1>
          </div>
          <p className="my-3 text-[#3F3F3F]">
            Companies limited by guarantee do not have share capital. Instead,
            members pledge to pay a specific amount in case of liquidation. This
            structure is suitable for non-profits, foundations, and social
            enterprises that need legal recognition without focusing on profit
            distribution. Members’ liability is limited to their guarantee
            amount.
          </p>
        </div>

        <div>
          <div className="flex items-center p-3 h-[50px] bg-[#58B09C]/10">
            <h1 className="font-semibold text-[#3F3F3F] md:text-lg">
              Unlimited Companies
            </h1>
          </div>
          <p className="my-3 text-[#3F3F3F]">
            In an unlimited company, there is no limit to the liability of its
            members. If the company faces financial losses or debts, members are
            personally responsible for covering them. This structure is rarely
            used but can be suitable for closely held entities where members are
            comfortable with full liability and want maximum control.
          </p>
        </div>
      </div>
    </div>
  );
}

export { TypesOfCompanies };
