import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  maxRating?: number;
  showScore?: boolean;
  className?: string;
}

export function Rating({
  rating,
  maxRating = 5,
  showScore = true,
  className = "",
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center justify-start gap-1 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index + 1}`}
          className="size-4 fill-[#FFA500] text-[#FFA500]"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className="relative size-4">
          <Star className="size-4 text-[#FFA500] absolute" />
          <div className="overflow-hidden w-1/2 absolute">
            <Star className="size-4 fill-[#FFA500] text-[#FFA500]" />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index + 1}`} className="size-4 text-[#FFA500]" />
      ))}

      {/* Rating score */}
      {showScore && (
        <>
          <div className="w-px h-4 bg-black mx-2" />
          <span className="text-lg font-semibold text-[#FFA500]">
            {rating}/{maxRating}
          </span>
        </>
      )}
    </div>
  );
}
