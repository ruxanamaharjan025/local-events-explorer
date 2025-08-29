import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Explore What’s Happening in Your City
        </h1>
        <p className="text-lg text-gray-100">
          Concerts, technology, sports, food festivals, art shows — discover the
          best local events around you.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
