import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export function TrustedCompanies() {
  return (
    <section className="px-4 md:px-16 py-18 md:py-32">
      <div className="mx-auto max-w-[1256px] flex flex-col items-center gap-6 md:gap-20">
        <div className="space-y-2">
          <h2 className="text-[32px] md:text-5xl font-bold text-center text-[#1E293B]">
            Brands that trusts us
          </h2>
          <p className="md:text-lg text-center px-8 md:px-0 text-[#3F3F3F]">
            Over 200+ companies incorporated in last 30 years
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] [--gap:100px]">
            {companyLogos.map((logo, index) => (
              <ReviewCard key={`${logo}-${index + 1}`} {...logo} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] [--gap:100px]"
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
  bgColor: string;
}) => {
  return (
    <figure
      className="relative h-full cursor-pointer overflow-hidden flex items-center"
      // style={{ backgroundColor: bgColor }}
    >
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
    src: "/images/companies/aromatics-logo.png",
    alt: "Aromatics Pvt. Ltd.",
    width: 260,
    height: 72,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/bhartia.png",
    alt: "Bhartia International School",
    width: 120,
    height: 120,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/easykartlabels.webp",
    alt: "Easy Kart Labels",
    width: 120,
    height: 120,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/hugel.jpg",
    alt: "Hugel",
    width: 120,
    height: 120,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/orchids.png",
    alt: "Orchids",
    width: 260,
    height: 72,
    bgColor: "#9D0022",
  },
  {
    src: "/images/companies/sahilkochhar.avif",
    alt: "Sahil Kochhar",
    width: 260,
    height: 72,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/vytals.png",
    alt: "Vytals",
    width: 260,
    height: 72,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/zavenir-daubert.png",
    alt: "Zavenir Daubert",
    width: 260,
    height: 72,
    bgColor: "#FFF",
  },
  {
    src: "/images/companies/delhitesthouse.png",
    alt: "Delhi test house",
    width: 100,
    height: 100,
    bgColor: "#FFF",
  },
];
