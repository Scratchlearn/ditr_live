import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-8 pb-6 px-6 sm:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-sm space-y-5">
        <p>
          <strong>DITR</strong> is an Indian online education platform that provides
          accessible & comprehensive learning experiences to students from classes 6
          to 12 and aspirants preparing for JEE, NEET, and other competitive exams.
          DITR also provides extensive NCERT solutions, sample papers, and previous
          year questions — making it a one-stop platform for all learning resources.
        </p>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">We Stand Out because</h3>
          <p>
            We successfully provide students with interactive courses taught by
            experienced and qualified faculties. DITR strives to make education
            affordable, comprehensive, and accessible to students from all
            backgrounds — empowering every learner to achieve their dreams.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Our Key Focus Areas</h3>
          <p>
            Our main focus is to create accessible learning opportunities for all
            students. With high-quality content in Physics, Chemistry, Maths, and
            Biology, DITR provides structured learning experiences with a student-first
            approach.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">What Makes Us Different</h3>
          <p>
            DITR follows a comprehensive pedagogical approach where students get
            engaging and result-oriented learning through digital classes, recorded
            lessons, and self-paced modules. Apart from academic preparation, we
            provide guidance and resources for personality growth and skill development.
          </p>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4 mt-6 text-xs text-gray-600">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <a
              href="/privacy-policy"
              className="hover:text-indigo-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="hover:text-indigo-600 transition-colors"
            >
              Terms of Use
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} <strong>DITR</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
