import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Professional Security, Housekeeping & Manpower Services
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Your trusted partner for safety, hygiene, and workforce excellence. We ensure secure environments, spotless spaces, and efficient manpower for every need.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/booking"
              className="bg-white text-blue-800 font-semibold py-2 px-6 rounded-xl hover:bg-gray-200 transition"
            >
              Book a Service
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white text-white py-2 px-6 rounded-xl hover:bg-white hover:text-blue-800 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Optional image or illustration */}
        <div className="md:w-1/2">
          <img
            src="/bg5.jpg"alt="Security Services"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
