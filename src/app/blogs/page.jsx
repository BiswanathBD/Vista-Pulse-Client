"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://vista-pulse-server-site.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs", err));
  }, []);

  const noImage =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
    "Health",
    "Business",
    "Entertainment",
  ];

  return (
    <div className="text-gray-900 container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-12">
      <h3 className="text-3xl font-bold text-center mb-8">All Blogs</h3>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="relative w-full md:w-1/2">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <CiSearch />
          </span>

          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-800/20 px-4 py-2 pl-10 rounded-lg w-full focus:ring-2 focus:ring-gray-300 outline-none transition-all"
          />
        </div>

        <select
          className="border border-gray-800/20 px-4 py-2 rounded-lg w-full md:w-1/3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No blogs found.
          </p>
        )}

        {filteredBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-800/5 mb-8"
          >
            {/* Image */}
            <div className="w-full h-64">
              <img
                src={blog.image || noImage}
                alt={blog.title}
                className="object-cover w-full aspect-3/2"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <button className="px-3 py-1 pt-1.5 bg-gray-700/20 text-gray-800 text-xs font-semibold rounded-sm mb-4">
                  {blog.category}
                </button>

                <h4 className="text-xl font-semibold mt-2 line-clamp-2">
                  {blog.title}
                </h4>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.description}
                </p>
              </div>

              <Link className="-mb-11! w-fit" href={`/blogs/${blog._id}`}>
                <button className="btn-primary rounded-none! mt-6 bg-gray-800 hover:bg-red-800 text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
