import RelumeIcon from "@/assets/icons/relume.svg";
import WebflowIcon from "@/assets/icons/webflow.svg";

export function TrustedCompanies() {
  return (
    <section className="w-full h-[152px] lg:h-[228px] flex items-center justify-center lg:justify-between">
      <h2 className="hidden lg:inline-block text-2xl font-bold max-w-[320px]">
        Used by the world's most average companies
      </h2>

      <div className="flex items-center gap-8 overflow-hidden">
        <div className="flex items-center gap-1">
          <WebflowIcon />
          <span className="text-lg font-semibold">Webflow</span>
        </div>

        <div className="flex items-center gap-1">
          <RelumeIcon />
          <span className="text-lg font-semibold">Relume</span>
        </div>

        <div className="flex items-center gap-1">
          <WebflowIcon />
          <span className="text-lg font-semibold">Webflow</span>
        </div>

        <div className="flex items-center gap-1">
          <RelumeIcon />
          <span className="text-lg font-semibold">Relume</span>
        </div>
      </div>
    </section>
  );
}
