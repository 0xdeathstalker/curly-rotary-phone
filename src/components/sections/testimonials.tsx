import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Rating } from "@/components/ui/rating";
import { TESTIMONIALS } from "@/lib/constants";
import { getInitials } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16">
      <div className="max-w-[1256px] mx-auto">
        <h1 className="text-[32px] md:text-5xl leading-[130%] font-bold text-center mb-20 text-[#1E293B]">
          Why thousands chose Taxocity
          <br />
          to scale their practice
        </h1>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]  [--gap:32px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <ReviewCard key={`${testimonial.id}-${index}`} {...testimonial} />
            ))}
          </Marquee>
          <div className="from-background to-transparent pointer-events-none absolute inset-y-0 -left-0.5 w-5 md:w-14 bg-linear-to-r" />
          <div className="from-background to-transparent pointer-events-none absolute inset-y-0 -right-0.5 w-5 md:w-14 bg-linear-to-l" />
        </div>
      </div>
    </section>
  );
}

type ReviewCardProps = {
  rating: number;
  image: string | null;
  name: string;
  position: string | null;
  company: string | null;
  message: string;
};

const ReviewCard = ({
  rating,
  image,
  name,
  position,
  company,
  message,
}: ReviewCardProps) => {
  return (
    <figure className="relative h-full flex flex-col justify-between max-w-[390px] cursor-pointer overflow-hidden rounded-xl border p-4">
      <div>
        <Rating rating={rating} />
        <blockquote className="mt-2.5 mb-6 text-lg">{message}</blockquote>
      </div>
      <div className="flex flex-row items-center gap-4">
        {image ? (
          <Image
            className="rounded-full"
            width="56"
            height="56"
            alt="customer avatar"
            src={image}
          />
        ) : (
          <span className="flex items-center justify-center size-14 bg-neutral-200 rounded-full">
            {getInitials(name)}
          </span>
        )}
        <div className="flex flex-col">
          <figcaption className="text-lg dark:text-white font-semibold">
            {name}
          </figcaption>
          <p className="font-medium dark:text-white/40">
            {position ? <span>{position},</span> : null} {company}
          </p>
        </div>
      </div>
    </figure>
  );
};
