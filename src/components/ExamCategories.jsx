import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// ✅ All 19 Exam Categories Data
const categories = [
  {
    title: "NEET",
    tags: ["class 11", "class 12", "Dropper"],
    img: "/assets/icons/neet.png",
    bg: "bg-[#fdecec]",
    link: "/courses/neet",
  },
  {
    title: "IIT JEE",
    tags: ["class 11", "class 12", "Dropper"],
    img: "/assets/icons/jee.png",
    bg: "bg-[#fff1d9]",
    link: "/courses/jee",
  },
  {
    title: "School Preparation",
    tags: ["class 6", "class 7", "class 8", "More"],
    img: "/assets/icons/school.png",
    bg: "bg-[#fff8e3]",
    link: "/courses/school",
  },
  {
    title: "UPSC",
    tags: [],
    img: "/assets/icons/upsc.png",
    bg: "bg-[#eff4ff]",
    link: "/courses/upsc",
  },
  {
    title: "Govt Job Exams",
    tags: ["SSC", "Banking", "Teaching", "Judiciary"],
    img: "/assets/icons/govt.png",
    bg: "bg-[#eaf7ff]",
    link: "/courses/govt",
  },
  {
    title: "Defence",
    tags: ["NDA", "CDS", "AFCAT", "Agniveer"],
    img: "/assets/icons/defence.png",
    bg: "bg-[#edf7ff]",
    link: "/courses/defence",
  },
  {
    title: "CA",
    tags: ["Foundation", "Intermediate"],
    img: "/assets/icons/ca.png",
    bg: "bg-[#fdecec]",
    link: "/courses/ca",
  },
  {
    title: "Olympiad",
    tags: [],
    img: "/assets/icons/olympiad.png",
    bg: "bg-[#fff2e0]",
    link: "/courses/olympiad",
  },
  {
    title: "MBA",
    tags: [],
    img: "/assets/icons/mba.png",
    bg: "bg-[#fff6da]",
    link: "/courses/mba",
  },
  {
    title: "State PSC",
    tags: [],
    img: "/assets/icons/statepsc.png",
    bg: "bg-[#eff4ff]",
    link: "/courses/statepsc",
  },
  {
    title: "Commerce",
    tags: [],
    img: "/assets/icons/commerce.png",
    bg: "bg-[#f2faff]",
    link: "/courses/commerce",
  },
  {
    title: "GATE",
    tags: [],
    img: "/assets/icons/gate.png",
    bg: "bg-[#edf7ff]",
    link: "/courses/gate",
  },
  {
    title: "CUET",
    tags: [],
    img: "/assets/icons/cuet.png",
    bg: "bg-[#ffeef5]",
    link: "/courses/cuet",
  },
  {
    title: "AE/JE",
    tags: [],
    img: "/assets/icons/aeje.png",
    bg: "bg-[#fff2e0]",
    link: "/courses/aeje",
  },
  {
    title: "IIT JAM & CSIR NET",
    tags: [],
    img: "/assets/icons/jamnet.png",
    bg: "bg-[#fff7e9]",
    link: "/courses/jamnet",
  },
  {
    title: "LAW",
    tags: [],
    img: "/assets/icons/law.png",
    bg: "bg-[#eff4ff]",
    link: "/courses/law",
  },
  {
    title: "ESE GATE",
    tags: [],
    img: "/assets/icons/esegate.png",
    bg: "bg-[#ebf7ff]",
    link: "/courses/esegate",
  },
  {
    title: "IPMAT",
    tags: [],
    img: "/assets/icons/ipmat.png",
    bg: "bg-[#fff1da]",
    link: "/courses/ipmat",
  },
  {
    title: "IELTS",
    tags: [],
    img: "/assets/icons/ielts.png",
    bg: "bg-[#feeef8]",
    link: "/courses/ielts",
  },
];

const ExamCategories = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-16 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
        Exam Categories
      </h2>
      <p className="text-gray-500 mb-10">
        DITR LIVE is preparing students for various exam categories. Scroll to find the one you are preparing for!
      </p>

      {/* ✅ CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCategories.map((cat, index) => (
          <Link
            key={index}
            to={cat.link}
            className="bg-white shadow-lg rounded-xl p-6 text-left hover:shadow-xl transition group relative overflow-hidden"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-3">{cat.title}</h3>

            {/* ✅ Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white border rounded-full text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-indigo-600 font-medium mt-3">
              Explore Category <FaArrowRight className="text-sm" />
            </span>

            {/* ✅ Icon Background */}
            <div className={`absolute right-0 bottom-0 h-40 w-40 rounded-l-full ${cat.bg} flex items-center justify-center`}>
              <img
                src={cat.img}
                alt={cat.title}
                className="h-14 w-14 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* ✅ View More / View Less Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-4 transition"
      >
        {showAll ? "View Less" : `View All Categories (${categories.length})`}
      </button>
    </div>
  );
};

export default ExamCategories;
