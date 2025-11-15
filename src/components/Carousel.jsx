// import React, { useState, useEffect, useRef } from "react";

// const slides = [
//   {
//     img: "/assets/slide1.jpg",
//     title: "Empower Your UPSC Preparation",
//     subtitle: "With NCERT | CSAT | Prelims + Mains | Test Series",
//     price: "Starting from ₹2,999/-",
//     buttonText: "Tap to Explore",
//   },
//   {
//     img: "/assets/slide2.jpg",
//     title: "Crash + Target NEET 2025/26 Batches",
//     subtitle: "Most Affordable Medical Coaching Classes",
//     price: "Start Your NEET Journey",
//     buttonText: "Join Now",
//   },
//   {
//     img: "/assets/slide3.jpg",
//     title: "Achieve Your IIT JEE Dream",
//     subtitle: "Expert Guidance & Practice Test Series",
//     price: "Starting from ₹3,499/-",
//     buttonText: "Explore Courses",
//   },
// ];

// const Carousel = () => {
//   const [index, setIndex] = useState(0);
//   const touchStartX = useRef(null);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
//   const onTouchEnd = (e) => {
//     const diff = e.changedTouches[0].clientX - touchStartX.current;
//     if (diff > 50) prevSlide();
//     if (diff < -50) nextSlide();
//   };

//   const current = slides[index];

//   return (
//     <section
//       className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[92vh] overflow-hidden"
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//     >
//       {/* Background Image */}
//       <img
//         src={current.img}
//         alt={`Slide ${index + 1}`}
//         className="w-full h-full object-cover transition-all duration-700"
//         loading="lazy"
//       />

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#000000b5] via-[#00000070] to-transparent"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20 text-white max-w-3xl">
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
//           {current.title}
//         </h1>
//         <p className="mt-3 text-lg sm:text-xl text-yellow-300 font-semibold drop-shadow">
//           {current.subtitle}
//         </p>
//         <p className="mt-2 text-base sm:text-lg font-medium text-white/90">
//           {current.price}
//         </p>

//         <button className="mt-6 bg-[#ff5a5f] hover:bg-[#ff3036] px-6 py-3 rounded-lg text-white font-bold text-lg w-fit transition-all duration-300 shadow-lg">
//           {current.buttonText} →
//         </button>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all"
//       >
//         ‹
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               i === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Carousel;
import React, { useState, useEffect, useRef, useCallback } from "react";

const Carousel = () => {
  const slides = Array.from({ length: 16 }, (_, i) => ({
    img: `/assets/slide${i + 1}.jpg`,
    title: `Discover Learning with DITR – Slide ${i + 1}`,
    subtitle: "Empowering Education with Quality & Affordability",
    price: "Join Now & Start Your Journey Today",
    buttonText: "Explore →",
  }));

  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  // ✅ useCallback keeps this function stable for useEffect
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]); // ✅ no warning now

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
  };

  const current = slides[index];

  return (
    <section
      className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[92vh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={current.img}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#000000b5] via-[#00000070] to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20 text-white max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
          {current.title}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-yellow-300 font-semibold drop-shadow">
          {current.subtitle}
        </p>
        <p className="mt-2 text-base sm:text-lg font-medium text-white/90">
          {current.price}
        </p>

        <button className="mt-6 bg-[#ff5a5f] hover:bg-[#ff3036] px-6 py-3 rounded-lg text-white font-bold text-lg w-fit transition-all duration-300 shadow-lg">
          {current.buttonText}
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
