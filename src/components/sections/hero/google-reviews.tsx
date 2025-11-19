import Image from "next/image";

function GoogleReviews() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
      <div className="flex items-center gap-2">
        <Image
          src="/images/google-reviews.png"
          alt="google reviews"
          width={64}
          height={36}
        />

        <div className="w-px h-6 bg-muted-foreground" />

        <div className="flex items-center">
          <div className="bg-muted-foreground border rounded-full size-6" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
        </div>
      </div>

      <div className="font-medium text-[#F99F0E]">
        <span className="font-semibold">4.8/5</span> (19k+ Reviews)
      </div>
    </div>
  );
}

export { GoogleReviews };
