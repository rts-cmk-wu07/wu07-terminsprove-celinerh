import { Link } from "react-router-dom";
import useRatings from "../hooks/useRatings";
import Ratings from "./Ratings";

function SliderCard({ gymClass }) {
  const { ratings, isPending } = useRatings(gymClass.id);

  return (
    <>
      <Link to={`/classes/${gymClass.id}`}>
        <img
          className="h-36 w-32 object-cover rounded-lg"
          src={gymClass.asset.url}
          alt={`${gymClass.className} workout class`}
          title={`${gymClass.className} workout class`}
        />
      </Link>
      <h3 className="truncate">{gymClass.className}</h3>
      {!isPending && <Ratings ratings={ratings} />}
    </>
  );
}

export default SliderCard;
