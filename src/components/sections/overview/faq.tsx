import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQPlus } from "@/components/ui/faq-plus";

function FAQ() {
  return (
    <div id="faq" className="scroll-mt-24 space-y-4">
      <h2 className="text-[32px] md:text-5xl text-[#1E1E1E] font-bold leading-[130%]">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base md:text-lg">
            What is the minimum requirement to register a Private Limited
            Company in India?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Content comes here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base md:text-lg">
            How long does the registration process take with TaxoCity?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Content comes here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base md:text-lg">
            What documents are required for company registration?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Content comes here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base md:text-lg">
            Are there any hidden charges apart from the package fee?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Content comes here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base md:text-lg">
            What post-incorporation support does TaxoCity provide?
            <FAQPlus />
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Content comes here
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { FAQ };
