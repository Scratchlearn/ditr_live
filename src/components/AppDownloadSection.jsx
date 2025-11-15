import React from "react";

const AppDownloadSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#f3f0ff] to-[#e9e6ff] py-16 px-6 rounded-3xl max-w-7xl mx-auto my-16 shadow-md overflow-hidden relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative">

        {/* ✅ Left Section - Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Join <span className="text-indigo-600">15 Million</span> students on the app today!
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700 text-base sm:text-lg font-medium">
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-indigo-600 text-lg">✔</span>
              Live & recorded classes available at ease
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-indigo-600 text-lg">✔</span>
              Dashboard for progress tracking
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-indigo-600 text-lg">✔</span>
              Lakhs of practice questions
            </li>
          </ul>

          {/* ✅ App Store Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/app/googleplay.png"
                alt="Google Play"
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/app/appstore.png"
                alt="App Store"
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* ✅ Right Section - Images */}
        <div className="flex-1 flex justify-center items-center relative min-h-[400px]">
          {/* Phone Mockup */}
          <img
            src="/assets/app/phone-mockup.png"
            alt="DITR App Preview"
            className="h-[450px] sm:h-[500px] object-contain opacity-100 drop-shadow-2xl"
          />

          {/* Sir Image Overlay */}
          <img
            src="/assets/app/sir.png"
            alt="DITR Sir"
            className="absolute bottom-0 right-10 h-[320px] sm:h-[350px] object-contain rounded-xl shadow-2xl z-20 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
    </section>
  );
};

export default AppDownloadSection;
