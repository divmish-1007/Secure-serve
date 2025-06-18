import React from 'react';

const AboutCard = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default AboutCard;
