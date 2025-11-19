import { Plus } from "lucide-react";

function FAQPlus() {
  return (
    <div className="bg-[#F9B934] rounded-full size-8 flex items-center justify-center shrink-0 transition-transform duration-200">
      <Plus className="size-4 group-data-[state=open]:rotate-45 transition-transform duration-200" />
    </div>
  );
}

export { FAQPlus };
