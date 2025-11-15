import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const SiteLinksSection = () => {
  return (
    <section className="bg-white border-t border-gray-200 text-gray-700 py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

        {/* Brand + Description */}
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/logo.png" alt="DITR" className="w-10 h-10" />
            <h2 className="font-bold text-lg">DITR</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            We understand that every student has unique needs and abilities,
            that’s why our curriculum is designed to adapt to your needs and
            help you grow!
          </p>

          <div className="flex gap-3 mb-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/googleplay.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/appstore.png" alt="App Store" className="h-10" />
            </a>
          </div>

          <p className="font-semibold mb-2">Let’s get social:</p>
          <div className="flex gap-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-sky-500"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-indigo-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-indigo-600">
                Careers
              </a>
            </li>
            <li>
              <a href="/updates" className="hover:text-indigo-600">
                Updates
              </a>
            </li>
            <li>
              <a href="/account-deletion" className="hover:text-indigo-600">
                Account Deletion
              </a>
            </li>
          </ul>
        </div>

        {/* Our Centre */}
        <div>
          <h3 className="font-bold mb-3">Our Centre</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/centres/delhi" className="hover:text-indigo-600">
                New Delhi
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Exams */}
        <div>
          <h3 className="font-bold mb-3">Popular Exams</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/courses/iit-jee" className="hover:text-indigo-600">
                IIT JEE
              </a>
            </li>
            <li>
              <a href="/courses/neet" className="hover:text-indigo-600">
                NEET
              </a>
            </li>
            <li>
              <a href="/courses/gate" className="hover:text-indigo-600">
                GATE
              </a>
            </li>
            <li>
              <a href="/courses/defence" className="hover:text-indigo-600">
                Defence
              </a>
            </li>
            <li>
              <a href="/courses/upsc" className="hover:text-indigo-600">
                UPSC
              </a>
            </li>
            <li>
              <a href="/courses/school" className="hover:text-indigo-600">
                School Prep
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/pw-prerna" className="hover:text-indigo-600">
                PW Prerna
              </a>
            </li>
            <li>
              <a href="/pw-sip" className="hover:text-indigo-600">
                PW SIP
              </a>
            </li>
            <li>
              <a href="/pw-gurukulam" className="hover:text-indigo-600">
                PW Gurukulam
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
     
    </section>
  );
};

export default SiteLinksSection;
