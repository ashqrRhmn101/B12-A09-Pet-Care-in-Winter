import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import logoImg from "../assets/logo.webp";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const link = (
    <>
      <li>
        <NavLink className="font-bold text-[#303082]" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-[#303082]" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-[#303082]" to="/my-profile">
          My Profile
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // alert("Successfully LogOut!");
        toast.success("Successfully LogOut!");
        // setTimeout(() => 1500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Toaster position="top-center" reverseOrder={false} />
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="text-xl">
          <img className="h-15 rounded-3xl" src={logoImg} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end mr-3">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-[#303082] text-white hover:bg-[#F7A703]"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-[#303082] text-white hover:bg-[#F7A703]">
              Login
            </button>
          </Link>
        )}
      </div>
      {/* PhotoURL */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar group relative"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={
                user
                  ? user.photoURL
                  : "https://img.icons8.com/?size=100&id=oO0pZgktLNpK&format=png&color=000000"
              }
            />
          </div>
          {/* User Name */}
          {user && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user.displayName}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
