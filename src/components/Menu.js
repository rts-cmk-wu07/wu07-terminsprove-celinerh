import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useToken } from "../contexts/TokenContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Menu({ setShowMenu }) {
  const { token, setToken } = useToken();

  const schema = yup
    .object({
      username: yup
        .string()
        .required("Username is missing")
        .matches(/^[a-z0-9]+$/i, "Valid characters: a-z and 0-9"),
      password: yup
        .string()
        .required("Password is missing")
        .matches(/^[a-z0-9]+$/i, "Valid characters: a-z and 0-9"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setToken(data);
      });
  };

  return (
    <div className="absolute inset-0 z-50 bg-white p-6">
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
        {token && (
          <>
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
              <button onClick={() => setToken(null)}>Log out</button>
            </li>
          </>
        )}
      </ul>
      {!token && (
        <form
          className="flex flex-col gap-4 border-t border-gray-300 mt-4 p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col">
            Username
            <input
              className="bg-secondary py-1 px-2 rounded-lg border border-gray-300"
              type="text"
              {...register("username")}
            />
            {errors.username?.message ? (
              <p className="text-red-600 text-sm tracking-wide leading-6">
                {errors.username?.message}
              </p>
            ) : (
              <p className="leading-6">&nbsp;</p>
            )}
          </label>
          <label className="flex flex-col">
            Password
            <input
              className="bg-secondary py-1 px-2 rounded-lg border border-gray-300"
              type="password"
              {...register("password")}
            />
            {errors.password?.message ? (
              <p className="text-red-600 text-sm tracking-wide leading-6">
                {errors.password?.message}
              </p>
            ) : (
              <p className="leading-6">&nbsp;</p>
            )}
          </label>
          <input
            className="bg-primary rounded-lg text-white py-2 tracking-widest text-md"
            type="submit"
            value="Login"
          />
        </form>
      )}
    </div>
  );
}

export default Menu;
