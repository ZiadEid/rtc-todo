import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { storeContext } from "../../context/Store";

const Navbar = () => {
  // hooks
  const { userData, logout } = useContext(storeContext);
  const navigate = useNavigate();

  return (
    <nav
      className={`w-130 max-w-full mx-auto p-3 mb-15 rounded bg-linear-to-r from-indigo-600 to-indigo-500 text-white flex items-center ${userData ? "justify-between" : "justify-end"}`}
    >
      {userData && (
        <li>
          <NavLink to={"/"} className="font-semibold">
            Home
          </NavLink>
        </li>
      )}
      <ul className="flex items-center gap-2">
        {userData ? (
          <li>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
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
