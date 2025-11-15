import React from "react";

const city = {
  name: "New Delhi",
  img: "/assets/cities/delhi.jpg", // ✅ add your Delhi centre image here
  link: "/offline-centres/delhi"
};

const OfflineCentres = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/assets/bg/centre-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Explore Tech-Enabled Offline DITR LIVE Centres
        </h2>
        <p className="mt-2 text-white/80 text-sm sm:text-base">
          Creating new benchmarks in learning experiences
        </p>

        {/* Centre List Card */}
        <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 text-gray-900 max-w-4xl mx-auto">

          <h3 className="text-lg font-semibold mb-6">
            Find DITR Centre in your city
          </h3>

          <p className="text-gray-500 text-sm mb-6">
            Available in <span className="font-bold text-indigo-600">1 city</span>
          </p>

          {/* Single Delhi Card */}
          <a
            href={city.link}
            className="flex items-center gap-4 border rounded-xl bg-white hover:bg-indigo-50 p-4 transition mx-auto w-56 shadow-sm"
          >
            <img
              src={city.img}
              alt={city.name}
              className="h-14 w-14 rounded-lg object-cover"
            />
            <span className="font-semibold">{city.name}</span>
          </a>

          <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfflineCentres;
