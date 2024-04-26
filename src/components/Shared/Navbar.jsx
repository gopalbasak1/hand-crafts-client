import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { IoIosLogIn } from "react-icons/io";
import { useContext, useState } from "react";

import { CgLogOut } from "react-icons/cg";
import { AuthContext } from "../../Context/AuthContextProvider";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
            : "text-[#404040] text-lg font-medium mr-3"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/myCraft"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
            : "text-[#404040] text-lg font-medium mr-3"
        }
      >
        My Craft
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/userProfile"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
                : "text-[#404040] text-lg font-medium mr-3"
            }
          >
            User Profile
          </NavLink>

          <NavLink
            to="/updateProfile"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
                : "text-[#404040] text-lg font-medium mr-3"
            }
          >
            Update Profile
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#5d882852] rounded-2xl mb-5 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-30"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-8 md:w-14 animate__animated md:animate__backInDown rounded-full"
              src={logo}
              alt=""
            />
          </Link>
          <Link
            to="/"
            className="btn btn-ghost   md:text-3xl animate__animated md:animate__backInDown -ml-2"
          >
            ha<span className="text-[#3e8ab6] -ml-2 -mr-2">n</span>d <span className="-ml-1 text-red-400">Crafts</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end relative">
          {user?.uid ? (
            <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL}
                    alt=""
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="absolute -left-24 top-4">
                  {showTooltip && (
                    <div className="tooltip">
                      {user?.displayName || "User name not found"}
                    </div>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => logout()}
                    className="btn btn-sm btn-ghost"
                  >
                    <span className="text-xl">
                      <CgLogOut />
                    </span>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-outline border-none  hover:bg-orange-400 md:text-lg">
                <span className="text-xl">
                  <IoIosLogIn />
                </span>{" "}
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
