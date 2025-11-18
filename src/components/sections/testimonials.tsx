import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Rating } from "@/components/ui/rating";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16">
      <div className="max-w-[1256px] mx-auto">
        <h1 className="text-[32px] md:text-5xl leading-[130%] font-bold text-center mb-20">
          Everything you need to build a
          <br />
          recurring revenue business...
        </h1>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]  [--gap:32px]">
            {testimonials.map((testimonial) => (
              <ReviewCard key={testimonial.id} {...testimonial} />
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
  position: string;
  company: string;
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
    <figure className="relative h-full max-w-[390px] cursor-pointer overflow-hidden rounded-xl border p-4">
      <Rating rating={rating} />
      <blockquote className="mt-2.5 mb-6 text-lg">{message}</blockquote>
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="56"
          height="56"
          alt="customer avatar"
          src={image ?? "/images/avatar-fallback.png"}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="font-medium dark:text-white/40">
            {position}, {company}
          </p>
        </div>
      </div>
    </figure>
  );
};
