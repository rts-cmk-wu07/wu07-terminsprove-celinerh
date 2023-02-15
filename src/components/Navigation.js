import { HiMenuAlt3 } from "react-icons/hi";
import GoBack from "./GoBack";

function Navigation({ goBack, title }) {
  return (
    <header className="mb-4">
      <nav>
        <ul className="flex items-center justify-between">
          <li>{goBack && <GoBack />}</li>
          {title && (
            <li>
              <p className="text-small">{title}</p>
            </li>
          )}

          <li>
            <HiMenuAlt3
              className="text-medium text-secondary"
              onClick={() => {
                console.log("clicked");
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
