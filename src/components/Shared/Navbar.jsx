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
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
                : "text-[#404040] text-lg font-medium mr-3"
            }
          >
            All Art & Craft Items
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

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
                : "text-[#404040] text-lg font-medium mr-3"
            }
          >
            Cart
          </NavLink>





<NavLink
            to="/addProduct"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
                : "text-[#404040] text-lg font-medium mr-3"
            }
          >
            Add Product
          </NavLink>

    <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-b border-[#23BE0A] font-semibold mr-3 text-lg"
            : "text-[#404040] text-lg font-medium mr-3"
        }
      >
        About
      </NavLink>


    </>
  );

  return (
    <div>
      <div className="navbar bg-[#c4b26252] rounded-2xl mb-5 shadow-xl mx-auto w-[400px] md:w-full ">
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
              className="w-8 md:w-14 rounded-full"
              src={logo}
              alt=""
            />
          </Link>
          <Link
            to="/"
            className="btn btn-ghost   md:text-3xl -ml-2"
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
                      <div>{user?.displayName || "User name not found"}</div>
                      <button onClick={() => logout()} className="btn btn-sm btn-ghost">
                        <span className="text-xl">
                          <CgLogOut />
                        </span>{" "}
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </label>
              
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
