import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../provider/Context";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/cart"
                >
                  <FaCartShopping size={20} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/favorite"
                >
                  <MdBookmarkAdd size={20} />
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" text-xl font-bold">
            PHONE<span className="text-blue-500">SHOP</span>
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li className="font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/cart"
              >
                <FaCartShopping size={20} />
                <small className="absolute top-0 right-0 font-bold">{cart.length}</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/favorite"
              >
                <MdBookmarkAdd size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
