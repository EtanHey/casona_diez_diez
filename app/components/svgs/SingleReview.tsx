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
      } absolute h-80 top-0 overflow-y-clip mx-4 flex flex-col gap-2 rounded-[48px] p-10 shadow-[2.0px_4.0px_2.0px_0px] shadow-cdd-green/25`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={review.profile_photo_url}
          alt={`Imagen de ${review.author_name}`}
          height={50}
          width={50}
        />
        <h4>{review.author_name}</h4>
      </div>
      <div className="flex flex-col gap-4">
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
        <p className="h-28 text-ellipsis overflow-y-hidden">{review.text}</p>
      </div>
    </div>
  );
};

export default SingleReview;
