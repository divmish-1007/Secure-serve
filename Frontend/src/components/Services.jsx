import React from "react";

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded">
          <img src="/bg1.jpg" alt="Security" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold">Security Guards</h3>
          <p>Trained security personnel for residential and commercial needs.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <img src="/bg2.jpg" alt="Housekeeping" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold">Housekeeping</h3>
          <p>Reliable housekeeping services for societies and offices.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <img src="/bg3.jpg" alt="Manpower" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold">Manpower Supply</h3>
          <p>From electricians to plumbers, we provide skilled and unskilled labor.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
