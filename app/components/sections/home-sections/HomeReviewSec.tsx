"use client";
import React, { useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import Header from "../../Header";
import ColoredBreak from "../../ColoredBreak";
import { Review } from "@/app/types";
import PrevSliderArrow from "../../PrevSliderArrow";
import NextSliderArrow from "../../NextSliderArrow";
import SingleReview from "../../SingleReview";

const HomeReviewSec = ({ reviews }: { reviews?: Array<Review> }) => {
  const [currentReview, setCurrentReview] = useState(0);
  if (!reviews || reviews.length === 0) return null;
  const length = reviews.length;
  const prevReview = () => {
    setSeeMore(false);
    setCurrentReview(currentReview === 0 ? length - 1 : currentReview - 1);
  };
  const nextReview = () => {
    setSeeMore(false);
    setCurrentReview(currentReview === length - 1 ? 0 : currentReview + 1);
  };
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-green" />
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full justify-between px-4">
          <PrevSliderArrow prevFunc={prevReview} arrowColor="#04986F" />
          <Header>Reseñas</Header>
          <NextSliderArrow nextFunc={nextReview} arrowColor="#04986F" />
        </div>
        {/* Reviews */}
        <div className="relative flex h-fit w-full flex-col place-items-center justify-center gap-4">
          {reviews.map((review, index) => {
            return (
              <SingleReview
                currentReview={currentReview}
                review={review}
                index={index}
                key={index}
                seeMore={seeMore}
                handleSeeMore={handleSeeMore}
              />
            );
          })}
        </div>
        <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cdd-green text-cdd-green">
          {currentReview + 1}/{reviews.length}
        </span>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeReviewSec;
