import { useEffect, useState } from "react";

function AllBeneficiary() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock API call to fetch users
    const fetchUsers = async () => {
      const mockUsers = [
        {
          cnic: "12345-6789012-3",
          name: "John Doe",
          phone: "1234567890",
          address: "123 Main St",
          purpose: "Medical Assistance",
          itemRequested: "Medicine",
          itemStatus: "Pending",
        },
        {
          cnic: "98765-4321098-7",
          name: "Jane Smith",
          phone: "9876543210",
          address: "456 Elm St",
          purpose: "Financial Aid",
          itemRequested: "Grant",
          itemStatus: "Accepted",
        },
      ];
      setUsers(mockUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Beneficiaries</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">CNIC</th>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Phone</th>
            <th className="border border-gray-200 px-4 py-2">Address</th>
            <th className="border border-gray-200 px-4 py-2">Purpose</th>
            <th className="border border-gray-200 px-4 py-2">Item Requested</th>
            <th className="border border-gray-200 px-4 py-2">Item Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 text-center">{user.cnic}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.phone}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.address}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.purpose}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.itemRequested}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{user.itemStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBeneficiary;