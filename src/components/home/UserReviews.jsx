"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ayesha Rahman",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "VistaPulse is amazing! I love discovering fresh blogs and exploring different topics easily.",
    rating: 5,
  },
  {
    name: "Rahim Uddin",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    comment:
      "The user interface is sleek and smooth. I find articles that interest me in seconds!",
    rating: 4,
  },
  {
    name: "Sara Khatun",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    comment:
      "I enjoy the blog recommendations. Great platform for readers and writers alike.",
    rating: 5,
  },
];

const UserReviews = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        What Our Users Say
      </h2>

      <div className=" container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full border-2 border-gray-800/20 mb-4"
            />
            <h4 className="font-semibold text-lg">{review.name}</h4>
            <div className="flex items-center justify-center my-2 text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-500">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
