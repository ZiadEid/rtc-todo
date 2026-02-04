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
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser(null)
    navigate('/login')
  };
  return (
    <nav className="w-130 max-w-full mx-auto px-2 py-3 mb-15 rounded bg-linear-to-r from-indigo-600 to-indigo-500 text-white flex items-center justify-between">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <ul className="flex items-center gap-2">
        {user ? (
          <li>
            <button onClick={logoutHandler} className="cursor-pointer">Logout</button>
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
