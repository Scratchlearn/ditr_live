import React from "react";

const stats = [
  {
    count: "15Million+",
    label: "Happy Students",
    bg: "bg-[#FFF3E2]", // light peach
  },
  {
    count: "24000+",
    label: "Mock Tests",
    bg: "bg-[#FFE8E8]", // light pink
  },
  {
    count: "14000+",
    label: "Video Lectures",
    bg: "bg-[#E6F8FF]", // light blue
  },
  {
    count: "80000+",
    label: "Practice Papers",
    bg: "bg-[#F1EDFF]", // light lavender
  },
];

const TrustedPlatform = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        A Platform Trusted by Students
      </h2>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        DITR LIVE aims to transform not just through words, but provide results with numbers!
      </p>

      {/* Stats Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} rounded-2xl shadow-sm py-10 px-4 flex flex-col justify-center items-center transition hover:scale-105 hover:shadow-md duration-300`}
          >
            <h3 className="text-3xl font-extrabold text-gray-900">{item.count}</h3>
            <p className="text-gray-700 mt-2 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPlatform;
