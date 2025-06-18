import React from 'react';
import AboutCard from './AboutCard';

const aboutTopics = [
  {
    title: "Our Mission",
    content: "To deliver unmatched security and manpower services tailored to your business or residential needs."
  },
  {
    title: "Why Choose Us",
    content: "Experienced personnel, modern equipment, 24/7 support, and a commitment to excellence."
  },
  {
    title: "Trained Professionals",
    content: "All our staff undergo rigorous training and background checks to ensure safety and reliability."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutTopics.map((topic, index) => (
            <AboutCard key={index} title={topic.title} content={topic.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
