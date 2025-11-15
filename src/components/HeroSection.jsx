import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#e8e7ff] to-white pb-20 pt-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Side Content */}
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Bharat’s <span className="text-indigo-600">Trusted &</span><br />
            <span className="text-indigo-600">Affordable</span><br />
            Educational Platform
          </h1>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Unlock your potential by joining DITR LIVE —
            The most affordable learning solution
          </p>

          <Link
            to="/courses"
            className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side Images */}
        <div className="relative flex items-center gap-10">

          {/* First Person */}
          <div className="relative">
            <img
              src="/assets/teacher1.png"
              alt="Instructor"
              className="h-56 sm:h-72 object-contain drop-shadow-xl"
            />
            <div className="absolute top-0 right-0 bg-white text-xs px-3 py-1 rounded-lg shadow">
              DITR is where students learn with love and grow with guidance
            </div>
          </div>

          {/* Second Person */}
          <div className="relative hidden sm:block">
            <img
              src="/assets/teacher2.png"
              alt="Student"
              className="h-48 sm:h-64 object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-0 left-0 bg-white text-xs px-2 py-1 rounded-lg shadow">
              Sir, what is DITR LIVE?
            </div>
          </div>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">

        <div className="p-5 text-center">
          <span className="text-red-500 text-3xl font-bold">🎥</span>
          <p className="font-semibold mt-2">Daily Live</p>
          <p className="text-gray-500 text-sm">Interactive Classes</p>
        </div>

        <div className="p-5 text-center">
          <span className="text-blue-500 text-3xl font-bold">📚</span>
          <p className="font-semibold mt-2">10 Million+</p>
          <p className="text-gray-500 text-sm">Notes & Study Material</p>
        </div>

        <div className="p-5 text-center">
          <span className="text-purple-500 text-3xl font-bold">🧠</span>
          <p className="font-semibold mt-2">24 x 7</p>
          <p className="text-gray-500 text-sm">Doubt Solving</p>
        </div>

        <div className="p-5 text-center">
          <span className="text-yellow-500 text-3xl font-bold">🏫</span>
          <p className="font-semibold mt-2">100+</p>
          <p className="text-gray-500 text-sm">Offline Centers</p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
