"use client";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ManageBlog = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    if (!loading) {
      return;
    }
  }, [loading]);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3000/userBlogs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount) {
          setUserBlogs(userBlogs.filter((blog) => blog._id !== id));
        }
      })
      .catch((err) => console.error("Error deleting blog:", err));
  };

  const noImage =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Your Blogs</h2>

      {userBlogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {userBlogs.map((blog) => (
            <div
              key={blog._id}
              className=" p-2 rounded-2xl shadow flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-800/20"
            >
              <img
                src={blog.image || noImage}
                alt={blog.title}
                className="w-full md:w-40 h-24 object-cover rounded-lg mr-4 mb-2 md:mb-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 text-sm truncate max-w-md">
                  {blog.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={
                      blog.authorPhoto ||
                      "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg"
                    }
                    alt={blog.authorName}
                    className="w-8 h-8 rounded-full border border-gray-800/20"
                  />
                  <p className="text-gray-500 text-xs">
                    {blog.authorName} |{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3 md:mt-0">
                <Link href={`/blogs/${blog._id}`}>
                  <button className="bg-gray-900 text-white btn-primary rounded-xl!">
                    View Details
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 text-white btn-primary rounded-xl!"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
