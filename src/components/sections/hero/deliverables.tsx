import { CircleCheckBig } from "lucide-react";

function Deliverables() {
  return (
    <div className="space-y-2 max-w-2xl">
      <h3 className="font-bold">What will you get:</h3>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <ul>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />
            Company Name Approval
          </li>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />2 DIN
            (Director identification Number)
          </li>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />
            Certificate of Incorporation
          </li>
        </ul>

        <ul>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />
            Company PAN & TAN, MoA & AoA
          </li>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />2 Digital
            Signature
          </li>
          <li className="flex items-center gap-1">
            <CircleCheckBig className="size-[18px] text-[#58B09C]" />
            ESI Registration & PF Registration
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Deliverables };
