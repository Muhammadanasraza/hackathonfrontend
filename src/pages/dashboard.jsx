import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaFileAlt, FaCog, FaTimes, FaBars } from "react-icons/fa";
import AdminReportsPage from "./AdminReportsPage";
import UsersPage from "./UsersPage";
import NewBeneficiary from "./NewBenificiary";

const mockData = {
  dashboard:  <AdminReportsPage/>,
  users: <UsersPage/>,
  reports: "Reports: Analyze data and export reports.",
  settings: "Settings: Configure your application preferences.",
  NewBeneficiary:<NewBeneficiary/>
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const tabs = [
    { name: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "users", label: "Users", icon: <FaUsers /> },
    { name: "reports", label: "Reports", icon: <FaFileAlt /> },
    { name: "settings", label: "Settings", icon: <FaCog /> },
    { name: "NewBeneficiary", label: "NewBeneficiary", icon: <FaUsers /> }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-md transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen ? <h1 className="text-xl font-bold text-gray-800">Menu</h1> : null}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="focus:outline-none text-gray-600 hover:bg-gray-200 rounded-full p-2"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-4 space-y-2 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`w-full flex items-center gap-4 px-4 py-2 text-left text-gray-600 hover:bg-blue-100 ${
                activeTab === tab.name ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className="text-lg">{tab.icon}</span>
              {isSidebarOpen ? <span>{tab.label}</span> : null}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-blue-500 text-white p-4 flex items-center justify-between shadow-md">
          <div className="text-xl font-bold">My Dashboard</div>
          <button className="bg-blue-700 px-4 py-2 rounded text-white">Logout</button>
        </div>

        <div className="p-6 flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <p className="text-gray-600">{mockData[activeTab]}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
