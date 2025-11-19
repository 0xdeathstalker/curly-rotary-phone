import { Marquee } from "@/components/ui/marquee";

function TrustableFeaturesCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:15s] py-0">
        {features.map((feature) => (
          <figure
            key={feature.label}
            className="bg-[#F9B934]/45 border border-[#F99F0E] rounded-full py-1 px-3 text-[#1D364D] font-medium"
          >
            <blockquote>{feature.title}</blockquote>
          </figure>
        ))}
      </Marquee>
      <div className="from-[#F9FAFB] to-transparent pointer-events-none absolute inset-y-0 -left-0.5 w-5 md:w-10 bg-linear-to-r" />
      <div className="from-[#F9FAFB] to-transparent pointer-events-none absolute inset-y-0 -right-0.5 w-5 md:w-10 bg-linear-to-l" />
    </div>
  );
}

const features = [
  {
    label: "companies",
    title: "1000+ companies incorporated",
  },
  {
    label: "years",
    title: "30+ years in business",
  },
  {
    label: "reviews",
    title: "300+ trusted reviews",
  },
];

export { TrustableFeaturesCarousel };
