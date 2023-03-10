import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import useUser from "../hooks/useUser";

function MySchedule() {
  const { user, error, isPending } = useUser();

  return (
    <div className="p-6">
      <Navigation goBack />
      <h1 className="heading1">My Schedule</h1>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {user?.classes.length > 0 && (
        <div className="flex flex-col gap-8">
          {user.classes.map((gymClass) => (
            <Link
              className="border-b border-black border-dashed"
              to={`/classes/${gymClass.id}`}
              key={gymClass.id}
            >
              <div className="flex justify-between">
                <p>{gymClass.classDay}</p>
                <p>{gymClass.classTime}</p>
              </div>
              <h2 className="heading2 mt-0">{gymClass.className}</h2>
            </Link>
          ))}
        </div>
      )}
      {user?.classes.length === 0 && (
        <div className="flex flex-col gap-8">
          <p>You have no classes scheduled.</p>
          <Link
            className="bg-primary rounded-lg text-white py-2 px-4 tracking-widest text-md w-fit"
            to="/home"
          >
            Find classes to join!
          </Link>
        </div>
      )}
    </div>
  );
}

export default MySchedule;
