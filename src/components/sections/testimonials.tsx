import Image from "next/image";
import WebflowIcon from "@/assets/icons/webflow.svg";

export function Testimonials() {
  return (
    <section className="flex overflow-x-auto md:overflow-x-hidden items-center md:justify-evenly gap-12">
      {[0, 1, 2].map((idx) => (
        <div
          key={idx}
          className="max-w-[350px] space-y-6 py-12 md:py-28 shrink-0 w-screen md:w-auto snap-center"
        >
          <div className="flex items-center justify-center gap-1">
            <WebflowIcon />
            <span className="text-lg font-semibold">Webflow</span>
          </div>

          <p className="font-bold text-lg lg:text-[20px] leading-tight text-center">
            "A customer testimonial that highlights features and answers
            potential customer doubts about your product or service. Showcase
            testimonials from a similar demographic to your customers."
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/avatar-fallback.png"
              alt="avatar image"
              width={56}
              height={56}
              className="size-14 shrink-0"
            />

            <div>
              <h4 className="font-bold text-center">Customer name</h4>
              <span className="text-center">Position, company name</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
