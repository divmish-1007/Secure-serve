import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can also use heroicons or any icon lib

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SecurityServe</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><Link to="/home" className="hover:underline">Home</Link></li>
          <li><Link to="/booking" className="hover:underline">Booking</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-900 px-6 py-4 space-y-4 font-semibold">
          <li><Link to="/home" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/booking" className="block hover:underline" onClick={() => setIsOpen(false)}>Booking</Link></li>
          <li><Link to="/services" className="block hover:underline" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
