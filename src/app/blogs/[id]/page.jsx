"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultProfile =
    "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80";

  useEffect(() => {
    fetch(`https://vista-pulse-server-site.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading blog", err));
  }, [id]);

  if (loading || !blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12 text-gray-900">
      {/* Category badge */}
      <button className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
        {blog.category}
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Creator & Date */}
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2 mb-4">
          <span>
            <img
              className="w-8 aspect-square object-cover rounded-lg"
              src={blog?.authorPhoto || defaultProfile}
              alt=""
            />
          </span>
          <span className="text-lg font-semibold pr-2 border-r">
            {blog.authorName}
          </span>
          <span className="text-black/50">{blog.authorEmail}</span>
        </p>
        <p>Date: {new Date(blog.created_at).toLocaleDateString()}</p>
      </div>

      {/* Featured Image */}
      <div className="relative w-full mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Long Description */}
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p>{blog.long_desc || blog.description}</p>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        ← Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;
