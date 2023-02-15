import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Menu({ setShowMenu }) {
  return (
    <div className="absolute top-0 left-0 z-50 h-full w-full bg-white p-6">
      <ul className="flex flex-col items-center gap-10 text-small">
        <li className="ml-auto">
          <button
            className="pl-2 pb-2"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <IoClose className="text-secondary text-medium" />
          </button>
        </li>
        <li>
          <Link
            to="/home"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            to="/schedule"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            My Schedule
          </Link>
        </li>
        <li>
          <button>Log out</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
