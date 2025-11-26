"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

const Register = () => {
  const { user, setUser, passwordSignUp, googleSignIn } =
    useContext(AuthContext);
  const [name, setName] = useState("");
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

    passwordSignUp(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
        }).then(() => {
          console.log(result.user);
          router.push("/");
        });
      })
      .catch((err) => console.error("Error signing up:", err));
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
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to start your journey with us
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <div className="flex items-center gap-3 border border-gray-800/20 rounded-lg px-3 py-2 bg-white">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

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

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary bg-gray-800 w-full text-white rounded-xl! hover:bg-gray-700 transition-all py-2 text-lg font-medium"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 btn-primary rounded-xl! bg-gray-800/10 hover:bg-gray-800/5 transition py-2"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            className="text-gray-700 font-semibold hover:underline"
            href="/signin"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
