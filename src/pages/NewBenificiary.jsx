import { useState } from "react";

function NewBeneficiary() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cnic: "",
    phone: ""
  });

  const [qrCode, setQrCode] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    const qrData = `Name: ${formData.name}, Email: ${formData.email}, CNIC: ${formData.cnic}, Phone: ${formData.phone}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    setQrCode(qrCodeUrl);
    // Add API call here to send data to backend
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Beneficiary</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter beneficiary's name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter beneficiary's email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* CNIC Field */}
        <div>
          <label className="block text-gray-600 mb-1">CNIC</label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            placeholder="Enter beneficiary's CNIC"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter beneficiary's phone number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Beneficiary
        </button>
      </form>
      {qrCode && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold text-gray-800">QR Code for Beneficiary</h3>
          <div className="mt-4">
            <img src={qrCode} alt="QR Code" className="mx-auto border p-2" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NewBeneficiary;
