import { Review } from "@/app/[lang]/types";
import Image from "next/image";
import React from "react";
import StarSvg from "./svgs/StarSvg";

const SingleReview = ({
  review,
  index,
  currentReview,
  seeMore,
  handleSeeMore,
}: {
  review: Review;
  index: number;
  currentReview: number;
  seeMore: boolean;
  handleSeeMore: () => void;
}) => {
  if (currentReview !== index) return null;
  return (
    <div
      className={`${index === currentReview ? "opacity-100" : "opacity-0"} ${
        seeMore ? "h-fit" : "h-80 lg:h-fit"
      } relative top-0 mx-4 flex flex-col gap-2 overflow-y-clip rounded-[48px] p-10 shadow-[2.0px_4.0px_2.0px_0px] shadow-cdd-green/25`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={review.profile_photo_url}
          alt={`Imagen de ${review.author_name}`}
          height={70}
          width={70}
        />
        <h4 className="text-lg">{review.author_name}</h4>
      </div>
      <div className="flex flex-col gap-4 overflow-y-hidden">
        <div className="flex items-center justify-center">
          {review.rating
            ? Array(5)
                .fill(review.rating)
                .map((_, index) =>
                  review.rating ? (
                    <div key={index}>
                      <StarSvg
                        key={index}
                        full={review.rating - 1 < index ? false : true}
                      />
                    </div>
                  ) : null,
                )
            : null}
        </div>
        <p
          className={
            seeMore ? "line-clamp-none" : `line-clamp-5 lg:line-clamp-6 md:text-base lg:text-lg`
          }
        >
          {review.text.length > 153 && (
            <button
              className="absolute bottom-3 text-blue-500 lg:hidden"
              onClick={handleSeeMore}
            >
              {seeMore ? "Ver menos" : "Ver más"}
            </button>
          )}
          {review.text}
        </p>
      </div>
    </div>
  );
};

export default SingleReview;
