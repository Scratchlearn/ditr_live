// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = ({ openAuth }) => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [showMegaMenu, setShowMegaMenu] = useState(false);
// //   const [activeCategory, setActiveCategory] = useState(0);
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     try {
// //       const storedUser = localStorage.getItem("user");
// //       if (storedUser) setUser(JSON.parse(storedUser));
// //     } catch {
// //       localStorage.clear();
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     window.location.reload();
// //   };

// //   // ✅ 11 PW-style categories (placeholders – we will replace)
// //   const categories = [
// //     { title: "Competitive Exams", subtitle: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad" },
// //     { title: "Only IAS", subtitle: "UPSC, State PSC" },
// //     { title: "School Preparation", subtitle: "Class 3-12 CBSE, ICSE, Boards" },
// //     { title: "Govt Exams", subtitle: "SSC, Banking, Railways, Teaching, Defence" },
// //     { title: "UG & PG Entrance Exams", subtitle: "MBA, CUET, CLAT, NEET PG, etc." },
// //     { title: "FINANCE", subtitle: "CA, CS, ACCA" },
// //     { title: "Others", subtitle: "Certification, Abroad Studies, Skill Courses" },
// //     { title: "Study Abroad", subtitle: "IELTS, TOEFL, MBBS Abroad" },
// //     { title: "Campus Programs", subtitle: "Offline + Hybrid Training Programs" },
// //     { title: "Mock Test Series", subtitle: "Real Exam-Level Practice" },
// //     { title: "Elite Batches", subtitle: "Top Ranked Teachers & Mentorship" },
// //   ];

// //   // ✅ Right side icons / course cards
// //   const courses = [
// //     { label: "IIT JEE" },
// //     { label: "NEET" },
// //     { label: "ESE" },
// //     { label: "GATE" },
// //     { label: "AE/JE" },
// //     { label: "Olympiad" },
// //   ];

// //   return (
// //     <nav className="bg-white fixed top-0 w-full shadow-md border-b z-50">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

// //         {/* Logo */}
// //         <Link to="/" className="flex items-center">
// //           <img src="/assets/logo.png" alt="DITR" className="h-10" />
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <div className="hidden lg:flex items-center gap-6">

// //           {/* All Courses Mega Dropdown */}
// //           <div
// //             className="relative"
// //             onMouseEnter={() => setShowMegaMenu(true)}
// //             onMouseLeave={() => setShowMegaMenu(false)}
// //           >
// //             <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium">
// //               All Courses
// //               <span className={`transition-transform duration-300 ${showMegaMenu ? "rotate-180" : ""}`}>
// //                 ▼
// //               </span>
// //             </button>

// //             {showMegaMenu && (
// //               <div className="absolute top-12 left-0 w-[1100px] bg-white shadow-2xl border rounded-xl p-6 grid grid-cols-3 gap-8 z-50 animate-fadeIn">

// //                 {/* LEFT SIDE: Category List */}
// //                 <div className="space-y-4 border-r pr-4">
// //                   {categories.map((cat, i) => (
// //                     <div
// //                       key={i}
// //                       onMouseEnter={() => setActiveCategory(i)}
// //                       className={`cursor-pointer transition ${
// //                         activeCategory === i ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
// //                       }`}
// //                     >
// //                       <p className="font-medium">{cat.title}</p>
// //                       <p className="text-xs text-gray-500">{cat.subtitle}</p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* RIGHT SIDE: Course Buttons */}
// //                 <div className="col-span-2 grid grid-cols-3 gap-4">
// //                   {courses.map((item, i) => (
// //                     <Link
// //                       key={i}
// //                       to="/courses"
// //                       className="flex items-center justify-center border py-3 rounded-lg hover:bg-gray-50 transition shadow-sm text-gray-700 font-semibold"
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   ))}
// //                 </div>

// //               </div>
// //             )}
// //           </div>

// //           {/* Top Menu Pages */}
// //           {["School Foundation", "Career Accelerator", "Study Materials", "Mock Test Series", "Campus Programs", "Elite Master Batches"].map((label, i) => (
// //             <Link key={i} to="/courses" className="hover:text-indigo-600 transition font-medium">
// //               {label}
// //             </Link>
// //           ))}
// //         </div>

// //         {/* Login / Profile */}
// //         {!user ? (
// //           <button
// //             onClick={openAuth}
// //             className="hidden lg:block bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700"
// //           >
// //             Login/Register
// //           </button>
// //         ) : (
// //           <div className="hidden lg:flex items-center space-x-4">
// //             <Link to="/my-courses" className="font-medium text-gray-700 hover:text-indigo-600">
// //               My Courses
// //             </Link>
// //             <span className="bg-gray-200 px-4 py-2 rounded-lg text-sm">+91 {user.mobile}</span>
// //             <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
// //               Logout
// //             </button>
// //           </div>
// //         )}

// //         {/* Mobile Menu Icon */}
// //         <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
// //           ☰
// //         </button>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ openAuth }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("Competitive Exams");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       localStorage.clear();
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   // ✅ Mega Menu Categories
//   const categories = [
//     {
//       title: "Competitive Exams",
//       subtitle: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad",
//       items: ["IIT JEE", "NEET", "ESE", "GATE", "AE/JE", "Olympiad"]
//     },
//     {
//       title: "Only IAS",
//       subtitle: "UPSC, State PSC",
//       items: ["UPSC", "State PSC"]
//     },
//     {
//       title: "School Preparation",
//       subtitle: "Class 3-12 CBSE, ICSE, Boards",
//       items: ["Class 6-8 Foundation", "Class 9-10 CBSE", "Class 11-12 CBSE", "Olympiad Prep"]
//     },
//     {
//       title: "Govt Exams",
//       subtitle: "SSC, Banking, Railways, Teaching, Defence",
//       items: ["SSC", "Banking", "Railway", "Teaching Exams", "Defence Exams"]
//     },
//     {
//       title: "UG & PG Entrance Exams",
//       subtitle: "MBA, CUET, CLAT, NEET PG, etc.",
//       items: ["MBA", "CUET", "CLAT", "NEET PG", "GMAT", "Design & Architecture"]
//     },
//     {
//       title: "FINANCE",
//       subtitle: "CA, CS, ACCA",
//       items: ["CA", "CS", "ACCA"]
//     },
//     {
//       title: "Others",
//       subtitle: "Certification Skills, Abroad Studies, etc.",
//       items: ["Online Degrees", "Certifications", "Abroad Study", "Job Assistance"]
//     }
//   ];

//   const currentCategory = categories.find((c) => c.title === selectedCategory);

//   return (
//     <nav className="bg-white fixed top-0 w-full shadow-sm border-b z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src="/assets/logo.png" alt="DITR" className="h-10" />
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-6">

//           {/* All Courses Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowMegaMenu(true)}
//             onMouseLeave={() => setShowMegaMenu(false)}
//           >
//             <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium">
//               All Courses <span className="text-lg">▾</span>
//             </button>

//             {showMegaMenu && (
//               <div className="absolute top-12 left-0 bg-white shadow-xl border rounded-lg w-[900px] p-5 grid grid-cols-2 gap-6 animate-fadeIn">

//                 {/* Left Side Category List */}
//                 <div className="space-y-4 border-r pr-4">
//                   {categories.map((cat, i) => (
//                     <div
//                       key={i}
//                       className="cursor-pointer hover:text-indigo-600"
//                       onMouseEnter={() => setSelectedCategory(cat.title)}
//                     >
//                       <p className="font-semibold">{cat.title}</p>
//                       <p className="text-sm text-gray-500">{cat.subtitle}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Right Side Item Grid */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {currentCategory?.items.map((item, i) => (
//                     <Link
//                       key={i}
//                       to={`/courses?category=${item}`}
//                       className="flex items-center justify-center border py-3 rounded-lg hover:bg-gray-50"
//                     >
//                       <span className="font-semibold text-gray-700">{item}</span>
//                     </Link>
//                   ))}
//                 </div>

//               </div>
//             )}
//           </div>

//           {/* Top-Level Pages */}
//           {["Vidyapeeth", "Upskilling", "Books", "Real Test", "Class 1st - 8th", "Power Batch"]
//             .map((label, i) => (
//               <Link key={i} to="/courses" className="hover:text-indigo-600 transition font-medium">
//                 {label}
//               </Link>
//             ))}
//         </div>

//         {/* Login / Profile */}
//         {!user ? (
//           <button
//             onClick={openAuth}
//             className="hidden lg:block bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700"
//           >
//             Login/Register
//           </button>
//         ) : (
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link to="/my-courses" className="font-medium text-gray-700 hover:text-indigo-600">
//               My Courses
//             </Link>
//             <span className="bg-gray-200 px-4 py-2 rounded-lg text-sm">+91 {user.mobile}</span>
//             <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Mobile Menu Button */}
//         <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ openAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);           // mobile hamburger
  const [showMega, setShowMega] = useState(false);           // desktop mega menu
  const [activeCat, setActiveCat] = useState(0);             // which left category is focused
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.clear();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  // ===== CATEGORIES (Left) + Items (Right) =====
  const categories = [
    {
      title: "Competitive Exams",
      subtitle: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad",
      items: [
        { label: "IIT JEE", to: "/courses?c=iit-jee" },
        { label: "NEET", to: "/courses?c=neet" },
        { label: "ESE", to: "/courses?c=ese" },
        { label: "GATE", to: "/courses?c=gate" },
        { label: "AE/JE", to: "/courses?c=ae-je" },
        { label: "Olympiad", to: "/courses?c=olympiad" },
      ],
    },
    {
      title: "Only IAS",
      subtitle: "UPSC, State PSC",
      items: [
        { label: "UPSC", to: "/courses?c=upsc" },
        { label: "State PSC", to: "/courses?c=state-psc" },
      ],
    },
    {
      title: "School Preparation",
      subtitle: "Class 3–12 CBSE, ICSE, Boards",
      items: [
        { label: "Class 6–8", to: "/courses?c=class-6-8" },
        { label: "Class 9–10", to: "/courses?c=class-9-10" },
        { label: "Class 11–12", to: "/courses?c=class-11-12" },
        { label: "Boards", to: "/courses?c=boards" },
      ],
    },
    {
      title: "Govt Exam",
      subtitle: "SSC, Banking, Railways, Teaching, Defence",
      items: [
        { label: "SSC", to: "/courses?c=ssc" },
        { label: "Banking", to: "/courses?c=banking" },
        { label: "Railways", to: "/courses?c=railways" },
        { label: "Teaching", to: "/courses?c=teaching" },
        { label: "Defence", to: "/courses?c=defence" },
      ],
    },
    {
      title: "UG & PG Entrance Exams",
      subtitle: "MBA, CUET, CLAT, NEET PG, etc.",
      items: [
        { label: "MBA", to: "/courses?c=mba" },
        { label: "CUET", to: "/courses?c=cuet" },
        { label: "CLAT", to: "/courses?c=clat" },
        { label: "NEET PG", to: "/courses?c=neet-pg" },
        { label: "CSIR NET", to: "/courses?c=csir-net" },
      ],
    },
    {
      title: "FINANCE",
      subtitle: "CA, CS, ACCA",
      items: [
        { label: "CA", to: "/courses?c=ca" },
        { label: "CS", to: "/courses?c=cs" },
        { label: "ACCA", to: "/courses?c=acca" },
      ],
    },
    {
      title: "Others",
      subtitle: "Certification Skills, Abroad Studies, etc.",
      items: [
        { label: "Certification Skills", to: "/courses?c=certification" },
        { label: "Online Degrees", to: "/courses?c=online-degree" },
        { label: "Private Banking", to: "/courses?c=private-banking" },
      ],
    },
    // ✅ Newly added per your screenshots:
    {
      title: "Study Abroad",
      subtitle: "IELTS, TOEFL, Acadfly MBBS Abroad, Acadfly Study Abroad",
      items: [
        { label: "IELTS", to: "/courses?c=ielts" },
        { label: "TOEFL", to: "/courses?c=toefl" },
        { label: "Acadfly MBBS Abroad", to: "/courses?c=acadfly-mbbs-abroad" },
        { label: "Acadfly Study Abroad", to: "/courses?c=acadfly-study-abroad" },
      ],
    },
    {
      title: "Agriculture",
      subtitle: "Agriculture",
      items: [{ label: "Agriculture", to: "/courses?c=agriculture" }],
    },
  ];

  // ===== Secondary top links (like PW tabs) =====
  const secondaryTabs = [
  { label: "Academics Plus", to: "/courses?tab=academics-plus" },
  { label: "Career Pathway", to: "/courses?tab=career-pathway" },
  { label: "Resource Store", to: "/store" },
  { label: "Assessment Suite", to: "/real-test" },
  { label: "Junior Program", to: "/courses?tab=junior-program" },
  { label: "Advanced Batch", to: "/courses?tab=advanced-batch" },
];

  // ===== Helpers =====
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <nav className="bg-white fixed top-0 w-full shadow-md border-b z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="DITR" className="h-10 w-auto" />
          <span className="sr-only">DITR</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* All Courses (Mega Menu) */}
          <div
            className="relative"
            onMouseEnter={() => isDesktop && setShowMega(true)}
            onMouseLeave={() => isDesktop && setShowMega(false)}
          >
            <button
              onClick={() => !isDesktop && setShowMega((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              All Courses
              <span className="text-lg leading-none">
                {showMega ? "⌃" : "⌄"}
              </span>
            </button>

            {/* Mega */}
            {showMega && (
              <div className="absolute top-12 left-0 w-[960px] bg-white rounded-xl border shadow-2xl overflow-hidden animate-fadeIn">
                <div className="grid grid-cols-[360px,1fr]">
                  {/* Left rail categories */}
                  <div className="bg-white p-4 border-r">
                    {categories.map((c, i) => (
                      <button
                        key={c.title}
                        onMouseEnter={() => setActiveCat(i)}
                        onFocus={() => setActiveCat(i)}
                        onClick={() => setActiveCat(i)}
                        className={`w-full text-left px-3 py-3 rounded-lg mb-1 transition flex items-start justify-between gap-3
                          ${activeCat === i ? "bg-indigo-50" : "hover:bg-gray-50"}`}
                        aria-label={c.title}
                      >
                        <div>
                          <p className="font-semibold text-gray-800">{c.title}</p>
                          <p className="text-xs text-gray-500">{c.subtitle}</p>
                        </div>
                        <span className="text-gray-400">›</span>
                      </button>
                    ))}
                  </div>

                  {/* Right panel items for active category */}
                  <div className="bg-white p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories[activeCat]?.items?.map((it) => (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="border rounded-xl p-4 hover:shadow-md hover:bg-gray-50 transition flex items-center justify-center font-semibold text-gray-700"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Secondary tabs */}
          {secondaryTabs.map((t) => (
            <Link
              key={t.label}
              to={t.to}
              className="font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              {t.label}
            </Link>
          ))}
        </div>

        {/* Auth area (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {!user ? (
            <button
              onClick={openAuth}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Login/Register
            </button>
          ) : (
            <>
              <Link
                to="/my-courses"
                className="font-medium text-gray-700 hover:text-indigo-600"
              >
                My Courses
              </Link>
              <span className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700">
                +91 {user?.mobile}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-2xl font-bold text-indigo-600"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white">
          <button
            onClick={() => setShowMega((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-3 border-b font-semibold"
          >
            All Courses
            <span className="text-lg">{showMega ? "⌃" : "⌄"}</span>
          </button>

          {showMega && (
            <div className="px-4 py-3 space-y-2 border-b">
              {categories.map((c, i) => (
                <details
                  key={c.title}
                  open={i === 0}
                  className="border rounded-lg"
                >
                  <summary className="cursor-pointer list-none px-3 py-2 font-medium flex items-center justify-between">
                    <span>
                      {c.title}
                      <span className="block text-xs text-gray-500 font-normal">
                        {c.subtitle}
                      </span>
                    </span>
                    <span className="text-gray-400 ml-3">›</span>
                  </summary>
                  <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                    {c.items.map((it) => (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="text-sm border rounded-md px-2 py-2 hover:bg-gray-50"
                        onClick={() => setMenuOpen(false)}
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          )}

          <div className="px-4 py-3 grid gap-2">
            {secondaryTabs.map((t) => (
              <Link
                key={t.label}
                to={t.to}
                className="px-3 py-2 rounded-md hover:bg-gray-50 border"
                onClick={() => setMenuOpen(false)}
              >
                {t.label}
              </Link>
            ))}

            {!user ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openAuth();
                }}
                className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Login/Register
              </button>
            ) : (
              <>
                <Link
                  to="/my-courses"
                  onClick={() => setMenuOpen(false)}
                  className="border rounded-md px-3 py-2 text-left"
                >
                  My Courses
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


