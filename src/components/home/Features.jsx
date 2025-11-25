"use client";
import React, { useEffect, useState } from "react";
import { FaPlane, FaUtensils, FaLightbulb } from "react-icons/fa";

const iconMap = {
  FaPlane: FaPlane,
  FaUtensils: FaUtensils,
  FaLightbulb: FaLightbulb,
};

const Features = () => {
  const [featuresData, setFeaturesData] = useState([]);
  
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeaturesData(data))
      .catch((err) => console.error("Failed to load features:", err));
  }, []);

  return (
    <div className="text-gray-900 container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-12">
      <h3 className="text-2xl font-semibold text-center mb-8">Our Features</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.id}
              className="shadow-lg shadow-gray-800/10 border border-gray-800/5 p-6 rounded-2xl text-gray-800 hover:text-white hover:bg-gray-800 transition-all"
            >
              <Icon className="text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
