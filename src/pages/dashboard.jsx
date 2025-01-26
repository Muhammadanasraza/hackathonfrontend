

import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaCog, FaTimes, FaBars } from "react-icons/fa";
import NewBeneficiary from "./NewBenificiary";
import AddUser from "./AddUser";
import AllUser from "./AllUser";
import AdminReportsPage from "./AdminReportsPage";
import AllBeneficiary from "./AllBeneficiary";

const mockData = {
    AdminReportsPage: <AdminReportsPage />,
    NewBeneficiary: <NewBeneficiary />,
    AllBeneficiary: <AllBeneficiary />,
    AddUser: <AddUser />,
    AllUser: <AllUser />,
};

function Dashboard() {
    const [activeTab, setActiveTab] = useState("AdminReportsPage");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const tabs = [
        { name: "AdminReportsPage", label: "Admin Reports", icon: <FaTachometerAlt /> },
        { name: "AddUser", label: "Add User", icon: <FaUsers /> },
        { name: "AllUser", label: "All Users", icon: <FaUsers /> },
        { name: "NewBeneficiary", label: "New Beneficiary", icon: <FaUsers /> },
        { name: "AllBeneficiary", label: "All Beneficiaries", icon: <FaUsers /> },
        { name: "settings", label: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${
                    isSidebarOpen ? "w-64" : "w-16"
                } bg-blue-200 shadow-md transition-all duration-300 flex flex-col`}
            >
                <div className="p-5 flex bg-blue-500 items-center justify-between">
                    {isSidebarOpen && <h1 className="text-xl font-bold text-gray-200">Menu</h1>}
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
                            {isSidebarOpen && <span>{tab.label}</span>}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="bg-blue-300 text-white p-4 flex items-center justify-between shadow-md">
                    <div className="text-xl font-bold">My Dashboard</div>
                    <div>
                        <button className="bg-blue-500 px-4 py-2 mx-2 rounded text-white">
                            Logout
                        </button>
                        <button className="bg-blue-500 px-4 py-2 rounded text-white">
                            <a href="/">Home</a>
                        </button>
                    </div>
                </div>

                <div className="p-6 flex-1">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        {tabs.find((tab) => tab.name === activeTab)?.label}
                    </h1>
                    <div className="text-gray-600">{mockData[activeTab]}</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
