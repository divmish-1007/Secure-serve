import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-white h-[70vh] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Reliable Security & Manpower Solutions</h2>
        <p className="text-lg">Protecting your premises with professionalism and precision.</p>
      </div>
    </section>
  );
};

export default HeroSection;
