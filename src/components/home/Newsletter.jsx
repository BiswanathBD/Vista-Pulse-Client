"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section className="container py-16 px-6 md:px-16 lg:px-32 text-center mt-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 mb-8">
        Get the latest blog posts, updates, and exclusive content delivered to your inbox.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-800/20 outline-none focus:ring-2 focus:ring-red-600"
          required
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4 font-medium">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4 font-medium">Please enter a valid email.</p>
      )}
    </section>
  );
};

export default Newsletter;
