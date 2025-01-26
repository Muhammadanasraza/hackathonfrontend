import { jsPDF } from "jspdf";
import { useRef, useState } from "react";

function NewBeneficiary() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cnic: "",
    phone: ""
  });

  const [qrCode, setQrCode] = useState("");
  const receiptRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qrData = `Name: ${formData.name}, Email: ${formData.email}, CNIC: ${formData.cnic}, Phone: ${formData.phone}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    setQrCode(qrCodeUrl);
  };

  const downloadPdf = () => {
    import("html2canvas").then((html2canvas) => {
      html2canvas(receiptRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Beneficiary_Receipt.pdf");
      });
    });
  };
  

  return (
    <div className="flex  gap-6 p-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Beneficiary</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate Receipt
          </button>
        </form>
      </div>

      {/* Receipt Section */}
      {qrCode && (
        <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow-md" ref={receiptRef}>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Beneficiary Receipt</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>CNIC:</strong> {formData.cnic}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <div className="mt-4">
            <img src={qrCode} alt="QR Code" className="border p-2" />
          </div>
          <button
            onClick={downloadPdf}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default NewBeneficiary;
