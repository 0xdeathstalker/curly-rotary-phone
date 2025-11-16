import Image from "next/image";
import { Rating } from "@/components/ui/rating";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16">
      <h1 className="text-[32px] md:text-4xl leading-[130%] font-bold text-center mb-20">
        Everything you need to build a
        <br />
        recurring revenue business...
      </h1>

      <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-8 overflow-x-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="max-w-[350px] space-y-6 shrink-0 border border-[#D9D9D9] rounded-xl p-6"
          >
            <Rating rating={testimonial.rating} />

            <p className="text-lg text-[#1E1E1E] leading-[140%]">
              {testimonial.message}
            </p>

            <div className="flex items-center justify-start gap-4">
              <Image
                src={testimonial.image ?? "/images/avatar-fallback.png"}
                alt="avatar image"
                width={56}
                height={56}
                className="size-14 shrink-0"
              />

              <div>
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                <span>
                  {testimonial.position}, {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
