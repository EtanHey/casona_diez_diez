import { Review } from "@/app/types";
import Image from "next/image";
import React from "react";
import StarSvg from "./StarSvg";

const SingleReview = ({
  review,
  index,
  currentReview,
}: {
  review: Review;
  index: number;
  currentReview: number;
}) => {
  return (
    <div
      className={`${
        index === currentReview ? "opacity-100" : "opacity-0"
      } absolute top-0 mx-4 flex h-80 flex-col gap-2 overflow-y-clip rounded-[48px] p-10 shadow-[2.0px_4.0px_2.0px_0px] shadow-cdd-green/25`}
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
                    <div>
                      <StarSvg
                        key={index}
                        full={review.rating - 1 < index ? false : true}
                      />
                    </div>
                  ) : null,
                )
            : null}
        </div>
        <p className="line-clamp-5 md:line-clamp-6">{review.text}</p>
      </div>
    </div>
  );
};

export default SingleReview;
