import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  // State
  const [user, setUser] = useState(() =>
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null,
  );

  // hooks
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser(null);
    location.replace("/login");
    // navigate('/login')
  };
  return (
    <nav
      className={`w-130 max-w-full mx-auto p-3 mb-15 rounded bg-linear-to-r from-indigo-600 to-indigo-500 text-white flex items-center justify-${user ? "between" : "end"}`}
    >
      {user && (
        <li>
          <NavLink to={"/"} className="font-semibold">
            Home
          </NavLink>
        </li>
      )}
      <ul className="flex items-center gap-2">
        {user ? (
          <li>
            <button
              onClick={logoutHandler}
              className="bg-white text-indigo-500 px-3 py-2 font-semibold rounded-lg cursor-pointer duration-200 active:scale-95"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"register"}>Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
