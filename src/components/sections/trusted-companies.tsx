import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export function TrustedCompanies() {
  return (
    <section className="px-4 md:px-16 py-18 md:py-32">
      <div className="mx-auto max-w-[1256px] flex flex-col items-center gap-6 md:gap-20">
        <div className="space-y-2">
          <h2 className="text-[32px] md:text-5xl font-bold text-center">
            Brands that trusts us
          </h2>
          <p className="md:text-lg text-center px-8 md:px-0">
            Over 200+ companies incorporated in last 30 years
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] [--gap:60px]">
            {companyLogos.map((logo, index) => (
              <ReviewCard key={`${logo}-${index + 1}`} {...logo} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] [--gap:60px]"
          >
            {companyLogos.map((logo, index) => (
              <ReviewCard key={`${logo}-${index + -1}`} {...logo} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l" />
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <figure className="relative h-full cursor-pointer overflow-hidden">
      <Image
        src={src ?? "/images/avatar-fallback.png"}
        alt={alt}
        width={width}
        height={height}
      />
    </figure>
  );
};

const companyLogos = [
  {
    src: "/logos/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
  },
  {
    src: "/logos/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
  },
  {
    src: "/logos/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
  },
  {
    src: "/logos/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
  },
  {
    src: "/logos/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
  },
];
