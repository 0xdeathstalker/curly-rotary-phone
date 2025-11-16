import Image from "next/image";

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
  // Add more logos here as needed
];

export function TrustedCompanies() {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-20 px-4 md:px-16 py-18 md:py-32">
      <div className="space-y-2">
        <h2 className="text-[32px] md:text-5xl font-bold text-center">
          Brands that trusts us
        </h2>
        <p className="md:text-lg text-center px-8 md:px-0">
          Over 200+ companies incorporated in last 30 years
        </p>
      </div>

      <div className="w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-10 h-full bg-linear-to-r from-background to-transparent z-10" />

        <div className="flex gap-16 animate-scrolling">
          {companyLogos.map((logo) => (
            <div key={`${logo.alt}-1`} className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
          {companyLogos.map((logo) => (
            <div key={`${logo.alt}-2`} aria-hidden className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-10 h-full bg-linear-to-l from-background to-transparent z-10" />
      </div>

      <div className="w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-10 h-full bg-linear-to-r from-background to-transparent z-10" />

        <div className="flex gap-16 animate-scrolling-reverse">
          {companyLogos.map((logo) => (
            <div key={`${logo.alt}-3`} className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
          {companyLogos.map((logo) => (
            <div key={`${logo.alt}-4`} aria-hidden className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-10 h-full bg-linear-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
