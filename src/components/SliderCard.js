import { Link } from "react-router-dom";

function SliderCard({ gymClass }) {
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
    </>
  );
}

export default SliderCard;
