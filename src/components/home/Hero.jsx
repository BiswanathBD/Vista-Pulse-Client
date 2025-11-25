import Image from "next/image";
import React from "react";
import heroImg from "../../../public/image-removebg-preview.png";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 grid md:grid-cols-2 items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Explore the World, Embrace the Moment
          </h1>
          <p className="mt-4">
            Discover the stories, destinations, and flavors that bring life into
            motion. From breathtaking travels to everyday lifestyle inspiration,
            we help you embrace each moment with curiosity and joy.
          </p>

          <div className="mt-12">
            <button className="btn-primary bg-white text-gray-900 hover:bg-white/90">Explore Now</button>
          </div>
        </div>
        <Image className="mt-12 w-full" src={heroImg} alt="Hero Image"></Image>
      </div>
    </div>
  );
};

export default Hero;
