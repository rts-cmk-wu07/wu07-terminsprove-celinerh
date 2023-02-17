import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import useClasses from "../hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import useTrainers from "../hooks/useTrainers";
import Navigation from "../components/Navigation";
import SliderCard from "../components/SliderCard";

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

  return (
    <div className="p-6 h-screen">
      <Navigation goBack />
      <h1 className="heading1">Search</h1>
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
      {!query && (
        <>
          <div>
            <h2 className="heading2">Popular Classes</h2>
            {classesError && <p>{classesError}</p>}
            {classesIsPending && <p>Loading...</p>}
            {classes && classes?.length > 0 && (
              <Swiper
                slidesPerView={2.5}
                spaceBetween={12}
                modules={[Pagination]}
              >
                {classes.map((gymClass) => (
                  <SwiperSlide key={gymClass.id}>
                    <SliderCard gymClass={gymClass} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div>
            <h2 className="heading2">Popular Trainers</h2>
            {trainerError && <p>{trainerError}</p>}
            {trainerIsPending && <p>Loading...</p>}
            {trainers && trainers?.length > 0 && (
              <div className="overflow-scroll max-h-56 flex flex-col gap-4">
                {trainers.map((trainer) => (
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
          </div>
        </>
      )}
      {query && (
        <div>
          <h2 className="heading2">Result</h2>
          {classesError && <p>{classesError}</p>}
          {classesIsPending && <p>Loading...</p>}
          {filteredClasses && filteredClasses?.length > 0 && (
            <div className="flex flex-col gap-8 w-fit">
              {filteredClasses.map((gymClass) => (
                <div key={gymClass.id}>
                  <SliderCard gymClass={gymClass} />
                </div>
              ))}
            </div>
          )}
          {filteredClasses?.length === 0 && (
            <p>
              Your search did not give any results. Try to search for something
              else.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
