import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 py-4 sticky top-0 z-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <nav className="bg-white rounded-full text-gray-800! flex items-center px-2 gap-4 justify-between">
          {/* logo */}
          <div className="logo py-1 flex flex-col text-right pl-4">
            <h3 className="text-3xl font-extrabold!">vista</h3>
            <p className="text-[10px] pr-1 -mt-1">-- P U L S E</p>
          </div>
          {/* nav optinos */}
          <div className="text-gray-700 font-semibold! flex gap-4 md:gap-8 nav">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/blogs"}>Blogs</Link>
            <Link href={"/"}>Post a Blog</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
          {/* sign */}
          <div>
            <button className="btn-primary text-white bg-gray-800! hover:bg-gray-700!">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
