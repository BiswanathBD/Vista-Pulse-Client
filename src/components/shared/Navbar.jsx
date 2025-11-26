"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  FaBars,
  FaBlog,
  FaHome,
  FaInfoCircle,
  FaPlusCircle,
  FaTools,
} from "react-icons/fa";

const Navbar = () => {
  const { user, setUser, loading, signOutUser } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };

  const defaultProfile =
    "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80";

  if (loading) return;

  return (
    <div className="bg-gray-900 py-4 sticky top-0 z-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <nav className="bg-white rounded-full text-gray-800! flex items-center px-2 gap-4 justify-between">
          {/* logo */}
          <Link href={"/"}>
            <div className="logo py-1 flex flex-col text-right pl-4">
              <h3 className="text-3xl font-extrabold!">vista</h3>
              <p className="text-[10px] pr-1 -mt-1">-- P U L S E</p>
            </div>
          </Link>
          {/* nav options */}
          <div className="text-gray-700 font-semibold! hidden lg:flex gap-4 md:gap-8 nav">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/blogs"}>Blogs</Link>
            <Link href={"/postBlog"}>Post a Blog</Link>
            <Link href={"/manageBlog"}>Manage Blogs</Link>
          </div>
          {/* sign */}
          <div>
            {user ? (
              <div
                onClick={() => setShowNav(!showNav)}
                className="relative cursor-pointer"
              >
                <img
                  className="w-10 aspect-square rounded-full border-2 border-gray-200 shadow"
                  src={user.iamge || defaultProfile}
                  alt=""
                />
                <FaBars className="absolute bottom-0 bg-gray-800/50 p-0.5 rounded-full text-white text-xs" />

                {/* Mobile nav */}
                <div
                  className={`absolute top-0 bg-gray-800 text-white rounded-2xl p-6 text-nowrap flex flex-col gap-4 ${
                    showNav
                      ? "opacity-100 right-11"
                      : "opacity-0 pointer-events-none right-8"
                  } transition-all`}
                >
                  <Link
                    href={"/"}
                    className="flex lg:hidden items-center gap-3"
                  >
                    <FaHome /> Home
                  </Link>

                  <Link
                    href={"/about"}
                    className="flex lg:hidden items-center gap-3"
                  >
                    <FaInfoCircle /> About Us
                  </Link>

                  <Link
                    href={"/blogs"}
                    className="flex lg:hidden items-center gap-3"
                  >
                    <FaBlog /> Blogs
                  </Link>

                  <Link
                    href={"/postBlog"}
                    className="flex lg:hidden items-center gap-3"
                  >
                    <FaPlusCircle /> Post a Blog
                  </Link>

                  <Link
                    href={"/manageBlog"}
                    className="flex lg:hidden items-center gap-3"
                  >
                    <FaTools /> Manage Blogs
                  </Link>

                  {/* bottom user section */}
                  <div className="mt-6 pt-6 lg:mt-0 lg:pt-0 border-t border-gray-800/20 text-sm flex gap-4 items-center">
                    <div className="flex-1">
                      <p className="font-semibold">{user?.displayName}</p>
                      <p className="font-light text-xs text-white/50">
                        {user?.email}
                      </p>
                    </div>

                    <button
                      onClick={handleSignOut}
                      className="btn-primary bg-white text-gray-800 flex items-center gap-2 px-3 py-1 rounded-lg"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link href={"/signin"}>
                <button className="btn-primary text-white bg-gray-800! hover:bg-gray-700!">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
