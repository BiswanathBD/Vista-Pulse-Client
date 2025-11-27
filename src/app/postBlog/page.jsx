"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    router.push("/signin");
  }

  const [blogData, setBlogData] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostBlog = (e) => {
    e.preventDefault();

    const finalBlog = {
      ...blogData,
      authorName: user?.displayName,
      authorEmail: user?.email,
      authorPhoto: user?.photoURL,
      created_at: new Date(),
    };

    fetch("https://vista-pulse-server-site.vercel.app/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Blog Added:", data);
        router.push("/blogs");
      })
      .catch((err) => console.error("Error:", err));
  };

  // Suggested categories
  const categories = [
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
    <div className="min-h-screen py-12 px-4 md:px-16 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Post a Blog</h2>

        <form onSubmit={handlePostBlog} className="space-y-5">
          {/* Image Link */}
          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={blogData.image}
              onChange={handleChange}
              placeholder="Enter blog image link"
              className="w-full mt-1 p-3 border border-gray-800/20 rounded-lg"
            />
          </div>

          {/* Blog Title */}
          <div>
            <label className="font-semibold">Blog Title</label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full mt-1 p-3 border border-gray-800/20 rounded-lg"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="font-semibold">Category</label>
            <select
              name="category"
              value={blogData.category}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-800/20 rounded-lg bg-white"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              value={blogData.description}
              onChange={handleChange}
              placeholder="Write your blog..."
              rows="5"
              className="w-full mt-1 p-3 border border-gray-800/20 rounded-lg"
              required
            ></textarea>
          </div>

          {/* User Info */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-800/10">
            <h3 className="font-semibold mb-2">Author Info</h3>

            <div className="flex items-center gap-4">
              <img
                src={
                  user?.photoURL ||
                  "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg"
                }
                alt="User"
                className="w-14 h-14 rounded-full border border-gray-800/20"
              />

              <div>
                <p className="font-semibold">
                  <span>Name:</span> {user?.displayName}
                </p>
                <p>
                  <span>Email:</span> {user?.email}
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white btn-primary rounded-xl! hover:bg-gray-800 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
