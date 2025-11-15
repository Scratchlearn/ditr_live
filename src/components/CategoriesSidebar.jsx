import React from "react";

const categories = [
  "Competitive Exams",
  "Only IAS",
  "School Preparation",
  "Govt Exams",
  "UG & PG Entrance Exams",
  "Finance",
  "Others",
];

const CategoriesSidebar = () => {
  return (
    <aside className="bg-white shadow-lg border rounded-xl p-4 space-y-3">
      <h2 className="text-lg font-bold text-gray-900">All Categories</h2>
      {categories.map((cat, i) => (
        <button
          key={i}
          className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        >
          {cat}
        </button>
      ))}
    </aside>
  );
};

export default CategoriesSidebar;
