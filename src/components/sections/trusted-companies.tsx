import RelumeIcon from "@/assets/icons/relume.svg";
import WebflowIcon from "@/assets/icons/webflow.svg";

export function TrustedCompanies() {
  return (
    <section className="h-[228px] flex items-center justify-between">
      <h2 className="text-2xl font-bold max-w-[320px]">
        Used by the world's most average companies
      </h2>

      <div className="flex items-center gap-8">
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
