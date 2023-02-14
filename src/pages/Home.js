import useClasses from "../hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Home() {
  const { classes, error, isPending } = useClasses();
  const randomClassIndex = Math.floor(Math.random() * classes?.length);

  return (
    <div className="p-6">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {classes && (
        <>
          <div>
            <Link
              className="grid grid-cols-1 grid-rows-1 h-96"
              to={`/classes/${classes[randomClassIndex].id}`}
            >
              <img
                className="row-span-full col-span-full h-full w-full object-cover rounded-lg"
                src={classes[randomClassIndex].asset.url}
                alt={`${classes[randomClassIndex].className} workout class`}
                title={`${classes[randomClassIndex].className} workout class`}
              />
              <h1 className="row-span-full col-span-full text-white text-large self-end pb-6 px-4 leading-[4rem]">
                {classes[randomClassIndex].className}
              </h1>
            </Link>
            <h2 className="text-medium">Classes for you</h2>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={12}
              modules={[Pagination]}
            >
              {classes.map((gymClass) => (
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
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
