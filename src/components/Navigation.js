import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import GoBack from "./GoBack";
import Menu from "./Menu";

function Navigation({ goBack, title, className }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <header className={`mb-4 ${className}`}>
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
                  setShowMenu(!showMenu);
                }}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
