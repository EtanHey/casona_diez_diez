"use client";
import React, { useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import Header from "../../Header";
import ColoredBreak from "../../ColoredBreak";
import { Review } from "@/app/types";
import PrevSliderArrow from "../../PrevSliderArrow";
import NextSliderArrow from "../../NextSliderArrow";
import SingleReview from "../../svgs/SingleReview";

const HomeReviewSec = ({ reviews }: { reviews?: Array<Review> }) => {
  const [currentReview, setCurrentReview] = useState(0);
  if (!reviews || reviews.length === 0) return null;
  const length = reviews.length;
  const prevReview = () => {
    setCurrentReview(currentReview === 0 ? length - 1 : currentReview - 1);
  };
  const nextReview = () => {
    setCurrentReview(currentReview === length - 1 ? 0 : currentReview + 1);
  };
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-green" />
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex justify-between w-full px-4">
          <PrevSliderArrow prevFunc={prevReview} arrowColor="#04986F" />
          <Header>Reseñas</Header>
          <NextSliderArrow nextFunc={nextReview} arrowColor="#04986F" />
        </div>
        {/* Reviews */}
        <div className="relative w-full h-80 flex flex-col place-items-center justify-center gap-4">
          {reviews.map((review, index) => {
            return (
              <SingleReview
                currentReview={currentReview}
                review={review}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cdd-black text-cdd-green">
        {currentReview + 1}/{reviews.length}
      </span>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeReviewSec;
