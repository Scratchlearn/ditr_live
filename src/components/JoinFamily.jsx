import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const channels = [
  {
    name: "DITR Foundation",
    subs: "3M Subscribers",
    img: "/assets/channels/gold.png",
    bg: "bg-yellow-50",
  },
  {
    name: "DITR Live",
    subs: "11.5M Subscribers",
    img: "/assets/channels/silver.png",
    bg: "bg-gray-50",
  },
  {
    name: "Competition DITR",
    subs: "2.7M Subscribers",
    img: "/assets/channels/gold.png",
    bg: "bg-yellow-50",
  },
  {
    name: "JEE DITR",
    subs: "1.6M Subscribers",
    img: "/assets/channels/gold.png",
    bg: "bg-yellow-50",
  },
  {
    name: "NEET DITR",
    subs: "2.1M Subscribers",
    img: "/assets/channels/gold.png",
    bg: "bg-yellow-50",
  },
];

const JoinFamily = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        Join The DITR Family, Today!
      </h2>
      <p className="text-gray-600 mb-10">
        Explore our YouTube channels and subscribe to get access to quality education for free.
      </p>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-indigo-100 z-10"
        >
          <FaChevronLeft className="text-indigo-600" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-indigo-100 z-10"
        >
          <FaChevronRight className="text-indigo-600" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 px-4 scrollbar-hide scroll-smooth"
        >
          {channels.map((ch, i) => (
            <div
              key={i}
              className={`min-w-[250px] rounded-2xl shadow-md p-6 flex flex-col items-center ${ch.bg} hover:shadow-lg transition`}
            >
              <img
                src={ch.img}
                alt={ch.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{ch.name}</h3>
              <p className="text-sm text-gray-600">{ch.subs}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <button className="mt-10 bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700">
        Get Started
      </button>
    </section>
  );
};

export default JoinFamily;
