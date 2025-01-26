import { useEffect, useState } from "react";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock API call to fetch users
    const fetchUsers = async () => {
      const mockUsers = [
        {
          name: "John Doe",
          email: "john@example.com",
          role: "Receptionist",
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          role: "Department Staff",
        },
      ];
      setUsers(mockUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUsers;
