import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const StudentTestimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Anmol Rathore",
      exam: "UPSC CSE 2023 AIR 7",
      course: "UPSC",
      img: "/assets/students/student1.jpg",
      text: "I used to regularly follow DITR’s live and recorded sessions, booster videos, and editorial discussions which helped me prepare effectively for UPSC. The clarity of teaching was unmatched.",
    },
    {
      name: "Raja Majhi",
      exam: "GATE 2024 AIR 1",
      course: "GATE",
      img: "/assets/students/student2.jpg",
      text: "I am thrilled to share that I secured AIR 1 in GATE 2024. From the very beginning, DITR LIVE stood out for its structured and comprehensive curriculum. The faculty’s dedication and clarity helped me excel.",
    },
    {
      name: "Amit Kumar Mandal",
      exam: "IBPS Topper",
      course: "Banking",
      img: "/assets/students/student3.jpg",
      text: "DITR helped me establish strong fundamentals through detailed lectures and mock tests. I improved both accuracy and speed, which was key to cracking IBPS.",
    },
  ];

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Students <span className="text-indigo-600">❤</span> DITR LIVE
        </h2>
        <p className="text-gray-600 mt-2">
          Hear from our students who made their dreams come true.
        </p>
      </div>

      {/* Topper Highlight Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 mb-14">
        {/* Thumbnail with Play Button */}
        <div className="relative w-full md:w-[45%]">
          <img
            src="/assets/students/neet-air1.jpg"
            alt="NEET AIR 1"
            className="rounded-xl w-full object-cover shadow-md"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaPlay size={20} />
            </div>
          </button>
        </div>

        {/* Topper Description */}
        <div className="flex-1 text-gray-700">
          <FaQuoteLeft className="text-indigo-500 text-3xl mb-2" />
          <p className="text-base sm:text-lg leading-relaxed">
            My name is <b>Tathagat Avatar</b>. I secured All India Rank 1 by
            scoring full marks in NEET UG 2024. I started my journey with DITR’s
            Foundation Batch and completed my full preparation with their online
            program. The teachers’ guidance and motivation helped me achieve AIR
            1!
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900">Multiple Rankers</p>
            <p className="text-sm text-indigo-600">
              AIR 1, AIR 86 and others | NEET
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Testimonials Section */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`min-w-[320px] max-w-md bg-white shadow-md rounded-xl p-6 snap-center transition-all duration-300 ${
                index === i ? "scale-100" : "scale-95 opacity-80"
              }`}
            >
              <FaQuoteLeft className="text-indigo-500 text-2xl mb-2" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                {t.text}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-indigo-600">
                    {t.exam} | {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-100"
        >
          <FaChevronLeft className="text-indigo-600" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-100"
        >
          <FaChevronRight className="text-indigo-600" />
        </button>
      </div>
    </section>
  );
};

export default StudentTestimonials;
