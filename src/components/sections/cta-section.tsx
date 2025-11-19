"use client";

import type * as React from "react";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { useModalOpen } from "@/context/modal";

function CTASection({ children }: { children: React.ReactNode }) {
  const modalState = useModalOpen();

  return (
    <div className="bg-[#1E293B] flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-28 px-0 md:px-16 fmd:mx-0">
      <Rating
        rating={4.8}
        starSize="size-6 md:size-10"
        textSize="text-lg md:text-3xl"
        dividerSize="h-6 md:h-7"
      />

      <div className="space-y-6 flex flex-col items-center justify-center text-[#F9FAFB]">
        {children}

        <p className="md:text-2xl max-w-[310px] md:max-w-max text-center text-[#F9FAFB] font-light">
          India’s highest-rated legal tax and compliance platform.
        </p>

        <Button
          size="lg"
          variant="brand"
          className="w-3xs"
          onClick={() => {
            modalState.setModalSource("cta");
            modalState.setIsOpen(true);
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export { CTASection };
