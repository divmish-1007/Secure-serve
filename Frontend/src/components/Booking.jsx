import { useState } from "react";

const Booking = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", serviceType: "", preferredDate: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Booking submitted successfully!");
      setForm({ name: "", phone: "", address: "", message: "", serviceType: "", preferredDate: "" });
    } else {
      alert("Failed to submit booking.");
    }
  } catch (err) {
    alert("An error occurred. Try again.");
    console.error(err);
  }
};


  return (
    <div className="py-16 px-4 bg-blue-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border border-gray-300 rounded p-3" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input className="w-full border border-gray-300 rounded p-3" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
          <input className="w-full border border-gray-300 rounded p-3" name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
          <input className="w-full border border-gray-300 rounded p-3" name="message" value={form.message} onChange={handleChange} placeholder="Message" optional />
          <select className="w-full border border-gray-300 rounded p-3" name="serviceType" value={form.serviceType} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="Security">Security</option>
            <option value="Housekeeping">Housekeeping</option>
            <option value="Manpower">Manpower</option>
          </select>
          <input className="w-full border border-gray-300 rounded p-3" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} required />
          <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};
export default Booking