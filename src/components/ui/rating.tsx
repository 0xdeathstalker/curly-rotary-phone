import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  maxRating?: number;
  showScore?: boolean;
  className?: string;
  starSize?: string;
  textSize?: string;
  dividerSize?: string;
  showDivider?: boolean;
}

export function Rating({
  rating,
  maxRating = 5,
  showScore = true,
  className = "",
  starSize = "size-4",
  textSize = "text-lg",
  dividerSize = "h-4",
  showDivider = true,
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center justify-start gap-1", className)}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index + 1}`}
          className={cn(starSize, "fill-[#FFA500] text-[#FFA500]")}
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className={cn("relative", starSize)}>
          <Star className={cn(starSize, "text-[#FFA500] absolute")} />
          <div className="overflow-hidden w-1/2 absolute">
            <Star className={cn(starSize, "fill-[#FFA500] text-[#FFA500]")} />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={`empty-${index + 1}`}
          className={cn(starSize, "text-[#FFA500]")}
        />
      ))}

      {/* Rating score */}
      {showScore && (
        <>
          {showDivider && (
            <div className={cn("w-px bg-black mx-2", dividerSize)} />
          )}
          <span
            className={cn(
              textSize,
              "font-semibold text-[#FFA500]",
              !showDivider && "pl-1",
            )}
          >
            {rating}/{maxRating}
          </span>
        </>
      )}
    </div>
  );
}
