"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs", err));
  }, []);

  const noImage =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

  return (
    <div className="text-gray-900 container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-12">
      <h3 className="text-3xl font-bold text-center mb-8">All Blogs</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col p-6 border border-gray-800/5 mb-8"
          >
            {/* Blog Image */}
            <div className="w-full h-64">
              <img
                src={blog.image || noImage}
                alt={blog.title}
                className="object-cover w-full aspect-3/2"
              />
            </div>

            {/* Blog Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                {/* Category as button */}
                <button className="px-3 py-1 pt-1.5 bg-gray-700/20 text-gray-800 text-xs font-semibold rounded-sm mb-4">
                  {blog.category}
                </button>

                {/* Title */}
                <h4 className="text-xl font-semibold mt-2 line-clamp-2">
                  {blog.title}
                </h4>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.short_desc}
                </p>
              </div>

              {/* Read More Button */}
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
