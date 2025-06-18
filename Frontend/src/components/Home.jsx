 import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import  { useEffect, useState } from 'react';

const images = [
  '/bg1.jpg',
  '/bg2.jpg',
  '/bg3.jpg',
  '/bg4.jpg'
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <HeroSection />

          <section className="relative w-full h-[50vh] overflow-hidden bg-black">
      {/* Image */}
      <img
        src={images[current]}
        alt="Background"
        className="w-full h-full object-contain transition-opacity duration-1000 ease-in-out absolute inset-0 mx-auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 text-center">
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Welcome to SecurityServe</h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
            Professional security, manpower, and housekeeping services.
          </p>
        </div>
      </div>
    </section>
      <section id="about" className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Our Mission</h3>
            <p>We aim to deliver top-notch security and manpower services tailored to your needs, ensuring your peace of mind and business continuity.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Why Choose Us</h3>
            <p>With highly trained personnel and a proven track record, SecurityServe provides reliable and efficient services in security, housekeeping, and staffing.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Client Satisfaction</h3>
            <p>We prioritize long-term client relationships, offering transparent communication and consistent service quality.</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-lg mb-2">Security Services</h4>
            <p>Professional guards, bouncers, event security, and more to ensure safety across industries.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-lg mb-2">Housekeeping Services</h4>
            <p>Efficient cleaning, maintenance, and sanitation services tailored for residential, commercial, and industrial setups.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-lg mb-2">Manpower Solutions</h4>
            <p>Reliable staffing for offices, events, industrial labor, and more – available short or long term.</p>
          </div>
        </div>
      </section>

       

      
    </div>
  );
};

export default Home;
