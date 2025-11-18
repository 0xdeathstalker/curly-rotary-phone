function TrustableFeaturesCarousel() {
  return (
    <div className="relative flex items-center gap-2 overflow-x-hidden">
      <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[#F9FAFB] z-10" />
      <div
        className="flex items-center gap-2"
        style={{
          animation: `infinite-scroll ${features.length * 80}s linear infinite`,
        }}
      >
        {Array.from({ length: 100 }).map((_, index) => {
          const diff = features[index % features.length];
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
      <div className="absolute inset-y-0 right-0 w-10 h-full bg-linear-to-l from-[#F9FAFB] z-10" />
    </div>
  );
}

const features = [
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

export { TrustableFeaturesCarousel };
