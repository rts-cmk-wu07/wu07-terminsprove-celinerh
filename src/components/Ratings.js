import React from "react";

function Ratings({ ratings }) {
  const ratingsSum = ratings?.reduce((acc, rating) => {
    return acc + rating.rating;
  }, 0);

  const ratingsAverage = ratings?.length ? ratingsSum / ratings?.length : 0;

  return (
    <div className="relative w-full h-5 bg-secondary">
      <div
        className={`${
          ratingsAverage ? `w-[${ratingsAverage}/5]` : "w-px"
        } bg-primary h-5`}
      ></div>
      {!ratingsAverage && (
        <p className="absolute top-[2px] left-2 text-xs text-gray-500">
          No ratings yet
        </p>
      )}
    </div>
  );
}

export default Ratings;
