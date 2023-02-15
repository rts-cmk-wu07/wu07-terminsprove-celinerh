import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="h-screen">
      <div
        className="grid grid-rows-1 grid-cols-1 h-1/2 bg-[length:auto_200%] bg-[top_left_-25rem] bg-no-repeat"
        style={{ backgroundImage: "url('/images/welcome_background.jpg')" }}
      >
        <div className="row-span-full col-span-full text-white z-50 flex items-end gap-2 pb-10">
          <div className="bg-white w-14 h-1 mb-2"></div>
          <div>
            <h1 className="text-xlarge leading-[4rem]">Believe Yourself</h1>
            <p className="text-small">Train like a pro</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 h-1/2 overflow-hidden">
        <div className="row-span-full col-span-full">
          <img
            className="object-cover w-full h-full"
            src="./images/welcome_center.jpg"
            alt="Girl working out"
            title="Girl working out"
          />
        </div>
        <Link
          className="row-span-full col-span-full place-self-end mb-10 button"
          to="/home"
        >
          Start Training
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
