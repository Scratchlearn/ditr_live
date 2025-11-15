import React from "react";
import CategoriesSidebar from "../components/CategoriesSidebar";
import CourseCard from "../components/CourseCard";

const subjects = [
  {
    title: "Physics",
    desc: "Best course for Physics",
    img: "/assets/courses/physics.png",
  },
  {
    title: "Chemistry",
    desc: "Best course for Chemistry",
    img: "/assets/courses/chemistry.png",
  },
  {
    title: "Maths",
    desc: "Best course for Maths",
    img: "/assets/courses/maths.png",
  },
  {
    title: "Biology",
    desc: "Best course for Biology",
    img: "/assets/courses/biology.png",
  },
  {
    title: "English",
    desc: "Best course for English",
    img: "/assets/courses/english.png",
  },
  {
    title: "Social Science",
    desc: "Best course for Social Science",
    img: "/assets/courses/social.png",
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
      
      {/* Permanent Left Sidebar */}
      <div className="hidden lg:block w-64">
        <CategoriesSidebar />
      </div>

      {/* Course Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((course, i) => (
          <CourseCard
            key={i}
            title={course.title}
            desc={course.desc}
            img={course.img}
          />
        ))}
      </div>

    </div>
  );
};

export default Courses;
