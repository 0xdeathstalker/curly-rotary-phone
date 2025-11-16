import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { MultiStepForm } from "@/components/sections/multi-step-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Hero() {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-center gap-8 md:gap-20 py-28 md:py-32 px-4 md:px-16 bg-[linear-gradient(318deg,rgba(255,177,50,0.5)_10%,rgba(251,249,243,1)_60%,rgba(246,238,255,1)_100%)]">
      <div className="space-y-6">
        <GoogleReviews />

        <div className="flex items-center gap-2 py-2 px-3 border rounded-xl bg-[#F9FAFB] max-w-[calc(100vw-55px)] md:max-w-2xl overflow-x-auto">
          <Image
            src="/logos/guard-check.svg"
            alt="shield check icon"
            width={24}
            height={24}
          />
          <span className="text-[#1D364D] text-nowrap">
            What sets us apart?
          </span>

          <TrustableFeaturesCarousel />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black leading-[120%] text-[#1E293B]">
            Register Your Private Limited Company in India - Starting @ ₹2,999
          </h1>

          <p className="md:text-lg leading-normal text-[#1A1A1A]/60 font-normal">
            Experience seamless legal drafting, faster MCA approvals, and a
            fully guided online registration process. All in one place.
          </p>
        </div>

        <Deliverables />

        <Button
          variant="outline"
          size="lg"
          className="bg-[#F9FAFB] border-[#6B7280] mt-4 md:mt-0"
        >
          See all the pricing
        </Button>
      </div>

      <div className="max-w-[500px] border border-[#E5E7EB] rounded-2xl p-3 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(153,153,153,0.16)_100%)] backdrop-blur-md">
        <Card className="relative z-10 w-full shadow-lg border-[#E5E7EB]">
          <CardHeader className="text-2xl font-bold text-center">
            <span className="hidden md:inline">
              Get personalised guidance from our company registration experts.
            </span>
            <span className="md:hidden">
              Need help with Company Registration?
            </span>
          </CardHeader>
          <CardContent className="px-8">
            <MultiStepForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function GoogleReviews() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <div className="flex items-center gap-2">
        <Image
          src="/images/google-reviews.png"
          alt="google reviews"
          width={64}
          height={36}
        />

        <div className="w-px h-6 bg-muted-foreground" />

        <div className="flex items-center">
          <div className="bg-muted-foreground border rounded-full size-6" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
        </div>
      </div>

      <div className="font-medium text-[#F99F0E]">
        <span className="font-semibold">4.8/5</span> (19k+ Reviews)
      </div>
    </div>
  );
}

function TrustableFeaturesCarousel() {
  return (
    <div className="relative flex items-center gap-2 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-7 h-full bg-linear-to-r from-[#F9FAFB] to-transparent z-10" />
      <div
        className="flex items-center gap-2"
        style={{
          animation: `infinite-scroll ${
            differences.length * 80
          }s linear infinite`,
        }}
      >
        {Array.from({ length: 100 }).map((_, index) => {
          const diff = differences[index % differences.length];
          return (
            <span
              key={`${diff.label}-${index}`}
              className="shrink-0 bg-[#F9B934]/45 border border-[#F99F0E] rounded-full py-1 px-3 text-[#1D364D] font-medium"
            >
              {diff.title}
            </span>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-7 h-full bg-linear-to-l from-[#F9FAFB] to-transparent z-10" />
    </div>
  );
}

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

const differences = [
  {
    label: "companies",
    title: "200+ companies incorporated",
  },
  {
    label: "years",
    title: "30+ years in business",
  },
  {
    label: "reviews",
    title: "5+ trusted reviews",
  },
];

export { Hero };
