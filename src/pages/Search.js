import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import useClasses from "../hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import useTrainers from "../hooks/useTrainers";

function Search() {
  const [query, setQuery] = useState("");
  const {
    classes,
    error: classesError,
    isPending: classesIsPending,
  } = useClasses();

  const {
    trainers,
    error: trainerError,
    isPending: trainerIsPending,
  } = useTrainers();

  const filteredClasses = classes?.filter((gymClass) =>
    query
      ? gymClass.className.toLowerCase().includes(query.toLowerCase())
        ? true
        : gymClass.classDescription.toLowerCase().includes(query.toLowerCase())
        ? true
        : gymClass.classDay.toLowerCase().includes(query.toLowerCase())
        ? true
        : gymClass.trainer.trainerName
            .toLowerCase()
            .includes(query.toLowerCase())
      : true
  );

  const filteredTrainers = trainers?.filter((trainer) =>
    query
      ? trainer.trainerName.toLowerCase().includes(query.toLowerCase())
      : true
  );

  return (
    <div className="p-6 h-screen">
      <h1 className="text-xlarge">Search</h1>
      <div className="flex gap-2 items-center bg-secondary rounded-lg p-2 border border-gray-300">
        <BiSearch className="text-gray-400" />
        <input
          className="bg-secondary outline-none placeholder:text-gray-400"
          type="text"
          placeholder="Search classes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-medium">Popular Classes</h2>
        {classesError && <p>{classesError}</p>}
        {classesIsPending && <p>Loading...</p>}
        {filteredClasses && filteredClasses?.length > 0 && (
          <Swiper slidesPerView={2.5} spaceBetween={12} modules={[Pagination]}>
            {filteredClasses.map((gymClass) => (
              <SwiperSlide key={gymClass.id}>
                <Link to={`/classes/${gymClass.id}`}>
                  <img
                    className="h-36 w-32 object-cover rounded-lg"
                    src={gymClass.asset.url}
                    alt={`${gymClass.className} workout class`}
                    title={`${gymClass.className} workout class`}
                  />
                </Link>
                <h3 className="truncate">{gymClass.className}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {filteredClasses?.length === 0 && (
          <p>
            Your search did not give any results. Try to search for something
            else.
          </p>
        )}
      </div>
      <div>
        <h2 className="text-medium">Popular Trainers</h2>
        {trainerError && <p>{trainerError}</p>}
        {trainerIsPending && <p>Loading...</p>}
        {filteredTrainers && filteredTrainers?.length > 0 && (
          <div className="overflow-scroll max-h-56 flex flex-col gap-4">
            {filteredTrainers.map((trainer) => (
              <div
                className="flex gap-4"
                key={`${trainer.id}${trainer.trainerName}`}
              >
                <Link to={``}>
                  <img
                    className="h-28 w-24 object-cover rounded-lg"
                    src={trainer.asset.url}
                    alt={trainer.trainerName}
                    title={trainer.trainerName}
                  />
                </Link>
                <h3>{trainer.trainerName}</h3>
              </div>
            ))}
          </div>
        )}
        {filteredTrainers?.length === 0 && (
          <p>
            Your search did not give any results. Try to search for something
            else.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
