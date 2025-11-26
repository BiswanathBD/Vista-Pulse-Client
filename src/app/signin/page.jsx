"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { user, setUser, passwordSignIn, googleSignIn } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordSignIn(email, password).then((result) => {
      setUser(result.user);
      router("/");
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email Address
            </label>
            <div className="flex items-center gap-3 border border-gray-800/20 rounded-lg px-3 py-2 bg-white">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <div className="flex items-center gap-3 border border-gray-800/20 rounded-lg px-3 py-2 bg-white">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button className="text-sm text-gray-700 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary bg-gray-800 w-full text-white rounded-xl! hover:bg-gray-700 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 btn-primary rounded-xl! bg-gray-800/10 hover:bg-gray-800/5 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            className="text-gray-700 font-semibold hover:underline"
            href="/register"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
