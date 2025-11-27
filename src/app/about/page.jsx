"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-16 lg:px-32">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        About Us
      </h1>

      {/* Mission Section */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 border border-gray-800/20">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-bold">VistaPulse</span>, our mission is to provide a modern
          and user-friendly platform for blogging enthusiasts. We aim to empower writers,
          creators, and readers by connecting ideas, knowledge, and experiences all in one
          place. We believe in sharing valuable content in a simple, accessible, and engaging
          way.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 border border-gray-800/20">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          Our vision is to become a leading community-driven platform for blogs across all
          categories. From technology and travel to lifestyle and education, VistaPulse
          provides a clean, responsive, and accessible experience for readers and content
          creators alike. We strive for simplicity, creativity, and innovation in the
          digital content space.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-800/20">
        <h2 className="text-2xl font-semibold mb-8">Meet the Creator</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://i.ibb.co.com/hJLSwC2z/IMG-0657.jpg"
            alt="Biswanath Sarker"
            className="w-40 h-40 rounded-full border border-gray-800/20 shadow-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Biswanath Sarker</h3>
            <p className="text-gray-700 mb-2">
              Full-Stack Web Developer & Blogger
            </p>
            <p className="text-gray-600">
              Passionate about creating smooth, responsive, and functional web applications.
              Loves turning ideas into real projects and sharing knowledge through blogging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
