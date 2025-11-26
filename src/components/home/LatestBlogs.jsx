"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const LatestBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  console.log(latestBlogs);

  const defaultProfile =
    "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80";
  const noImage =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

  useEffect(() => {
    fetch("http://localhost:3000/latestBlogs?limit=3")
      .then((res) => res.json())
      .then((data) => setLatestBlogs(data))
      .catch((err) => console.error("Error loading blogs", err));
  }, []);

  return (
    <div className="text-gray-900 container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-24">
      <h3 className="text-2xl font-semibold text-center -mb-24">
        Latest Blogs
      </h3>

      {latestBlogs.map((blog, index) =>
        index % 2 === 0 ? (
          <div
            className="grid lg:grid-cols-2 items-center my-8 lg:my-32 group"
            key={blog._id}
          >
            <div className="w-full overflow-hidden border-4 border-white shadow-xl shadow-gray-600/50 ">
              <img
                className="w-full aspect-4/3 object-cover group-hover:scale-105 transition-all"
                src={blog.image || noImage}
                alt={blog.title}
              />
            </div>

            <div className="bg-gray-900/98 text-white p-4 md:p-8 lg:p-16 grow aspect-8/3 lg:-ml-24 z-10">
              <p className="flex items-center gap-2 mb-4">
                <span>
                  <img
                    className="w-8 aspect-square object-cover rounded-lg"
                    src={blog?.authorPhoto || defaultProfile}
                    alt=""
                  />
                </span>
                <span className="text-lg font-semibold pr-2 border-r">
                  {blog?.authorName}
                </span>
                <span className="text-white/50">{blog?.authorEmail}</span>
              </p>
              <h3 className="text-3xl font-semibold">{blog?.title}</h3>
              <p className="line-clamp-2 mt-4">{blog?.description}</p>
              <Link href={"/blogs/6925e3fce4ef0ecb0690dcd0"}>
                <button className="btn-primary bg-white hover:bg-white/80 text-gray-800 mt-8">
                  View Full Blog
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="grid lg:grid-cols-2 items-center my-8 lg:my-32 group"
            key={blog._id}
          >
            <div className="bg-gray-900/98 text-white p-4 md:p-8 lg:p-16 grow aspect-8/3 lg:-mr-24 z-10">
              <p className="flex items-center gap-2 mb-4">
                <span>
                  <img
                    className="w-8 aspect-square object-cover rounded-lg"
                    src={blog?.authorPhoto || defaultProfile}
                    alt=""
                  />
                </span>
                <span className="text-lg font-semibold pr-2 border-r">
                  {blog?.authorName}
                </span>
                <span className="text-white/50">{blog?.authorEmail}</span>
              </p>
              <h3 className="text-3xl font-semibold">{blog?.title}</h3>
              <p className="line-clamp-2 mt-4">{blog?.description}</p>
              <Link href={"/blogs/6925e3fce4ef0ecb0690dcd0"}>
                <button className="btn-primary bg-white hover:bg-white/80 text-gray-800 mt-8">
                  View Full Blog
                </button>
              </Link>
            </div>

            <div className="w-full overflow-hidden border-4 border-white shadow-xl shadow-gray-600/50 ">
              <img
                className="w-full aspect-4/3 object-cover group-hover:scale-105 transition-all"
                src={blog.image || noImage}
                alt={blog.title}
              />
            </div>
          </div>
        )
      )}

      <button className="-mt-8 w-full flex justify-end text-lg font-semibold text-sky-800 px-2">
        <Link
          href={"/blogs"}
          className="flex items-center gap-2 hover:text-red-800 w-fit"
        >
          <HiArrowLongRight size={32} />
          <span>See all Blogs</span>
        </Link>
      </button>
    </div>
  );
};

export default LatestBlogs;
