import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResultsSection = () => {
  // List of your course categories (same as you used before)
  const courses = [
    "NEET 2025 Results",
    "IIT JEE 2025 Results",
    "School Exams 2025",
    "UPSC 2025 Results",
    "Govt Exams 2025",
    "Defence Results",
    "CA Foundation 2025",
    "MBA Entrance",
    "Olympiad Results",
    "State PSC",
    "Commerce",
    "GATE",
    "CUET",
    "AE/JE",
    "IIT JAM & CSIR NET",
    "LAW",
    "ESE GATE",
    "IPMAT",
    "IELTS"
  ];

  // Images for the slide carousel (place them in /public/assets/results/)
  const slides = [
    "/assets/results/result1.jpg",
    "/assets/results/result2.jpg",
    "/assets/results/result3.jpg",
  ];

  const courseScrollRef = useRef(null);
  const slideScrollRef = useRef(null);

  // Scroll for course tags
  const scrollCourses = (direction) => {
    if (courseScrollRef.current) {
      courseScrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Scroll for slides
  const scrollSlides = (direction) => {
    if (slideScrollRef.current) {
      slideScrollRef.current.scrollBy({
        left: direction === "left" ? -800 : 800,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        Academic Excellence : Results
      </h2>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Giving wings to a million dreams, a million more to go
      </p>

      {/* Get Started Button */}
      <button className="mt-6 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
        Get Started
      </button>

      {/* Scrollable Course Tags */}
      <div className="relative mt-10">
        <button
          onClick={() => scrollCourses("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden sm:block"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={courseScrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-8 py-3"
        >
          {courses.map((course, i) => (
            <Link
              key={i}
              to={`/results/${course.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex-shrink-0 border border-gray-300 rounded-full px-5 py-2 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-700 transition"
            >
              {course}
            </Link>
          ))}
        </div>

        <button
          onClick={() => scrollCourses("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden sm:block"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Carousel of Results */}
      <div className="relative mt-10 max-w-5xl mx-auto">
        <button
          onClick={() => scrollSlides("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={slideScrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth rounded-xl"
        >
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Result Slide ${i + 1}`}
              className="flex-shrink-0 w-[90vw] sm:w-[800px] h-[400px] object-cover rounded-xl"
            />
          ))}
        </div>

        <button
          onClick={() => scrollSlides("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ResultsSection;
