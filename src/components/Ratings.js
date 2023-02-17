function Ratings({ ratings }) {
  const ratingsSum = ratings?.reduce((acc, rating) => {
    return acc + rating.rating;
  }, 0);

  const ratingsAverage = ratings?.length ? ratingsSum / ratings?.length : 0;

  return (
    <div className="relative w-full h-5 bg-secondary">
      <div
        style={{
          width: `${ratingsAverage ? `${(ratingsAverage / 5) * 100}%` : "1px"}`,
        }}
        className={`bg-primary h-5`}
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
