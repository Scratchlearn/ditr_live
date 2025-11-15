import React from "react";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Reference Books",
    desc: "Our experts have created thorough study materials that break down complicated concepts into easily understandable content.",
    img: "/assets/resources/books.png",
    link: "/books",
    bg: "bg-blue-50",
  },
  {
    title: "NCERT Solutions",
    desc: "Unlock academic excellence with DITR LIVE’s NCERT Solutions which provide you step-by-step explanations.",
    img: "/assets/resources/ncert.png",
    link: "/ncert",
    bg: "bg-yellow-50",
  },
  {
    title: "Notes",
    desc: "Use DITR LIVE’s detailed study materials that simplify complex ideas into easily understandable language.",
    img: "/assets/resources/notes.png",
    link: "/notes",
    bg: "bg-green-50",
  },
];

const StudyResources = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-2">
        Study Resources
      </h2>
      <p className="text-center text-gray-600 mb-10">
        A diverse array of learning materials to enhance your educational journey.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {resources.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition ${item.bg}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-36 h-36 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            <Link
              to={item.link}
              className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudyResources;
