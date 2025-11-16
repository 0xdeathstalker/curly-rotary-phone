import { Button } from "@/components/ui/button";
import { Rating } from "../ui/rating";

export function BottomCTA() {
  return (
    <section className="bg-[#1E293B] flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-28 px-0 md:px-16 mx-4 md:mx-0 rounded-xl md:rounded-none">
      <Rating
        rating={4.8}
        starSize="size-6 md:size-10"
        textSize="text-lg md:text-3xl"
        dividerSize="h-6 md:h-7"
      />

      <div className="space-y-6 flex flex-col items-center justify-center text-[#F9FAFB]">
        <h1 className="text-2xl md:text-5xl text-center leading-[120%] font-bold max-w-[310px] md:max-w-3xl">
          Get fast, affordable company registration with complete CA/CS support.{" "}
          <span className="text-[#F9B934]">Start now.</span>
        </h1>

        <p className="max-w-[310px] md:max-w-max text-center">
          India’s highest-rated legal tax and compliance platform.
        </p>

        <Button
          size="lg"
          className="w-3xs bg-[#F9B934] border border-[#1E293B] text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
