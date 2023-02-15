import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function GoBack({ className }) {
  return (
    <Link className={`flex items-center text-primary ${className}`} to="/home">
      <AiFillCaretLeft className="text-small" /> Back
    </Link>
  );
}

export default GoBack;
