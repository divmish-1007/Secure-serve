const Contact = () => {
  return (
    <div className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
      <p className="text-lg mb-2">📞 <strong>123-456-7890</strong></p>
      <p className="text-lg mb-2">📧 <strong>support@yourcompany.com</strong></p>
      <p className="text-lg mb-4">📍 123 Main Street, Your City</p>
      <a href="https://wa.me/911234567890" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
        Chat on WhatsApp
      </a>
    </div>
  );
};
export default Contact