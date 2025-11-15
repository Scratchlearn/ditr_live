import React from "react";

const CourseCard = ({ title }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition text-center">
    <img src="https://via.placeholder.com/150" alt={title} className="mx-auto mb-3 rounded-lg" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-600 text-sm mb-3">Best course for {title}</p>
    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
      Explore
    </button>
  </div>
);

export default CourseCard;
