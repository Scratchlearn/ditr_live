// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Notes from "./pages/Notes";
// import TestSeries from "./pages/TestSeries";
// import Dummy from "./pages/Dummy";
// import MyCourses from "./pages/MyCourses";
// import LoginModal from "./components/LoginModal";
// import HeroSection from "./components/HeroSection";
// import ExamCategories from "./components/ExamCategories";
// import OfflineCentres from "./components/OfflineCentres";
// import TrustedPlatform from "./components/TrustedPlatform";
// import ResultsSection from "./components/ResultsSection";
// import AppDownloadSection from "./components/AppDownloadSection";
// import StudentTestimonials from "./components/Testimonials";
// // import StudyResources from "./components/StudyResources";
// // import JoinFamily from "./components/JoinFamily";





// const App = () => {
//   const [showAuth, setShowAuth] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("user")) {
//       setLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Navbar openAuth={() => setShowAuth(true)} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/notes" element={<Notes />} />
//         <Route path="/test-series" element={<TestSeries />} />
//         <Route path="/vidyapeeth" element={<Dummy title="Vidyapeeth" />} />
//         <Route path="/upskilling" element={<Dummy title="Upskilling" />} />
//         <Route path="/store" element={<Dummy title="PW Store (Books)" />} />
//         <Route path="/real-test" element={<Dummy title="Real Test" />} />

//         {loggedIn && <Route path="/my-courses" element={<MyCourses />} />}
//       </Routes>

//       {showAuth && <LoginModal close={() => setShowAuth(false)} />}
//         <HeroSection/>
//         <ExamCategories/>
//         <OfflineCentres />
//         <TrustedPlatform />
//          <ResultsSection />
//          <AppDownloadSection />
//         <StudentTestimonials />


//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Courses from "./pages/Courses";
// import Notes from "./pages/Notes";
// import TestSeries from "./pages/TestSeries";
// import Dummy from "./pages/Dummy";
// import MyCourses from "./pages/MyCourses";
// import LoginModal from "./components/LoginModal";
// import HeroSection from "./components/HeroSection";
// import ExamCategories from "./components/ExamCategories";
// import OfflineCentres from "./components/OfflineCentres";
// import TrustedPlatform from "./components/TrustedPlatform";
// import ResultsSection from "./components/ResultsSection";
// import AppDownloadSection from "./components/AppDownloadSection";
// import StudentTestimonials from "./components/Testimonials";
// import StudyResources from "./components/StudyResources";
// import JoinFamily from "./components/JoinFamily";
// import SiteLinksSection from "./components/SiteLinksSection";
// import LearningResources from "./components/LearningResources";
// import Caoursel from  "./components/Carousel"






// const App = () => {
//   const [showAuth, setShowAuth] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   // 🔗 Section Refs for Smooth Scroll
//   const heroRef = useRef(null);
//   const coursesRef = useRef(null);
//   const centresRef = useRef(null);
//   const resultsRef = useRef(null);
//   const testimonialsRef = useRef(null);

//   useEffect(() => {
//     if (localStorage.getItem("user")) {
//       setLoggedIn(true);
//     }
//   }, []);

//   // Smooth scroll handler
//   const handleScroll = (section) => {
//     section?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <Router>
//       <Navbar openAuth={() => setShowAuth(true)} onNavigate={handleScroll} />
//       <Routes>
//         {/* ✅ Homepage */}
//         <Route
//           path="/"
//           element={
//             <>
//               <div ref={heroRef}>
//                 <HeroSection />
//               </div>
               
//               <div ref={coursesRef}>
//                 <ExamCategories />
//               </div>

//               <div ref={centresRef}>
//                 <OfflineCentres />
//               </div>

//               <TrustedPlatform />

//               <div ref={resultsRef}>
//                 <ResultsSection />
//               </div>

//               <AppDownloadSection />

//               <div ref={testimonialsRef}>
//                 <StudentTestimonials />
//               </div>

//               <StudyResources />
//               <JoinFamily />
//               <SiteLinksSection />   {/* Add here */}
//                     <LearningResources />

//             </>
//           }
//         />

//         {/* Other Pages */}
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/notes" element={<Notes />} />
//         <Route path="/test-series" element={<TestSeries />} />
//         <Route path="/vidyapeeth" element={<Dummy title="Vidyapeeth" />} />
//         <Route path="/upskilling" element={<Dummy title="Upskilling" />} />
//         <Route path="/store" element={<Dummy title="PW Store (Books)" />} />
//         <Route path="/real-test" element={<Dummy title="Real Test" />} />
//         {loggedIn && <Route path="/my-courses" element={<MyCourses />} />}
//       </Routes>

//       {showAuth && <LoginModal close={() => setShowAuth(false)} />}
//       <Footer />
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Notes from "./pages/Notes";
import TestSeries from "./pages/TestSeries";
import Dummy from "./pages/Dummy";
import MyCourses from "./pages/MyCourses";
import LoginModal from "./components/LoginModal";
import HeroSection from "./components/HeroSection";
import ExamCategories from "./components/ExamCategories";
import OfflineCentres from "./components/OfflineCentres";
import TrustedPlatform from "./components/TrustedPlatform";
import ResultsSection from "./components/ResultsSection";
import AppDownloadSection from "./components/AppDownloadSection";
import StudentTestimonials from "./components/Testimonials";
import StudyResources from "./components/StudyResources";
import JoinFamily from "./components/JoinFamily";
import SiteLinksSection from "./components/SiteLinksSection";
import LearningResources from "./components/LearningResources";
import Carousel from "./components/Carousel"; // ✅ Carousel Import

const App = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Section references for smooth scrolling
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const centresRef = useRef(null);
  const resultsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, []);

  // Smooth scroll handler
  const handleScroll = (section) => {
    section?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <Navbar openAuth={() => setShowAuth(true)} onNavigate={handleScroll} />

      {/* ✅ Carousel directly below Navbar */}
      <Carousel />

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <div ref={heroRef}>
                <HeroSection />
              </div>

              <div ref={coursesRef}>
                <ExamCategories />
              </div>

              <div ref={centresRef}>
                <OfflineCentres />
              </div>

              <TrustedPlatform />

              <div ref={resultsRef}>
                <ResultsSection />
              </div>

              <AppDownloadSection />

              <div ref={testimonialsRef}>
                <StudentTestimonials />
              </div>

              <StudyResources />
              <JoinFamily />
              <SiteLinksSection />
              <LearningResources />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/test-series" element={<TestSeries />} />
        <Route path="/vidyapeeth" element={<Dummy title="Vidyapeeth" />} />
        <Route path="/upskilling" element={<Dummy title="Upskilling" />} />
        <Route path="/store" element={<Dummy title="PW Store (Books)" />} />
        <Route path="/real-test" element={<Dummy title="Real Test" />} />
        {loggedIn && <Route path="/my-courses" element={<MyCourses />} />}
      </Routes>

      {showAuth && <LoginModal close={() => setShowAuth(false)} />}
      <Footer />
    </Router>
  );
};

export default App;
