import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQPlus } from "@/components/ui/faq-plus";

function FAQ() {
  return (
    <div id="faq" className="scroll-mt-24 space-y-4 text-[#1A1A1A]">
      <h2 className="text-[32px] md:text-5xl text-[#1E293B] font-bold leading-[130%]">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base md:text-lg hover:no-underline cursor-pointer">
            What is the minimum requirement to register a Private Limited
            Company in India?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            To register a Private Limited Company, you need at least two
            directors, two shareholders, a registered office address in India,
            and essential documents such as proof of identity and address for
            all directors and shareholders.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base md:text-lg hover:no-underline cursor-pointer">
            How long does the registration process take with TaxoCity?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Depending on the package you choose, the process can be completed in
            as little as 7 days. Our starter package typically takes 14–35 days,
            while our standard and pro packages expedite the process to 7–21
            days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base md:text-lg hover:no-underline cursor-pointer">
            What documents are required for company registration?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            You will need the following documents for all directors and
            shareholders: 1. PAN card 2. Aadhaar card or address proof
            (passport, voter ID, driver’s license) 3. Passport-sized photographs
            4. Proof of registered office address (rent agreement or property
            ownership documents and a recent utility bill)
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base md:text-lg hover:no-underline cursor-pointer">
            Are there any hidden charges apart from the package fee?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            No, our pricing is 100% transparent. The advertised price includes
            all services mentioned in your chosen package, and any government
            fees will be clearly communicated upfront.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base md:text-lg hover:no-underline cursor-pointer">
            What post-incorporation support does TaxoCity provide?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base4 text-[#3F3F3F]">
            <p>
              After incorporation, we provide comprehensive support for all
              Ministry of Corporate Affairs (MCA) compliances to ensure your new
              company remains legally sound.
            </p>

            <p>
              These crucial services, including annual return filings
              (AOC-4/MGT-7) and obtaining the Commencement of Business
              Certificate, are offered at an additional cost through our
              tailored packages.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { FAQ };
