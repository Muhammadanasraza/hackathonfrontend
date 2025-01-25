import { useState } from "react";
import { Link } from "react-router"; // For navigation between pages

function Home() {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  // Dummy data for demonstration
  const mockData = {
    "123": { name: "John Doe", age: 30, email: "john.doe@example.com" },
    "456": { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  };

  const handleSearch = () => {
    if (mockData[userId]) {
      setUserDetails(mockData[userId]);
    } else {
      setUserDetails({ error: "User not found" });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Beneficiary Management</h1>

          {/* Navigation Buttons */}
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/signup" className="hover:text-gray-200">Signup</Link>
            <Link to="/Dashboard" className="hover:text-gray-200">Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div>
        <header className="text-center py-20 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Effortless Beneficiary Management
            </h2>
            <p className="text-lg mb-8">
              Manage, track, and organize your beneficiaries seamlessly with our secure platform.
            </p>

            {/* Search Input Field */}
            <div className="flex justify-center items-center mb-8">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID..."
                className="w-2/3 p-4 bg-blue-900 text-white rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition duration-300"
              >
                Search
              </button>
            </div>
          </div>
        </header>

        {/* User Details Section */}
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
          {userDetails ? (
            userDetails.error ? (
              <p className="text-red-500 text-center text-xl">{userDetails.error}</p>
            ) : (
              <div className="text-gray-800">
                <h3 className="text-2xl font-bold mb-4">User Details</h3>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Age:</strong> {userDetails.age}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
              </div>
            )
          ) : (
            <p className="text-gray-500 text-center text-lg">Enter a User ID to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
