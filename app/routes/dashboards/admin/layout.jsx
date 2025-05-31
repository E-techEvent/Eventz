import React, { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router';
import { FaHome, FaUsers, FaCalendarAlt, FaTicketAlt, FaCog, FaComments, FaUserTie } from 'react-icons/fa';

const AdminDashboardLayout = () => {
  const { userId } = useParams();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Dummy admin data - in a real app, this would come from an API
  const adminData = {
    id: userId || '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    avatar: '/images/headshot.jpg'
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarItems = [
    { name: 'Dashboard', icon: <FaHome />, path: `/dashboard/admin` },
    { name: 'Users', icon: <FaUsers />, path: `/dashboard/admin/users` },
    { name: 'Organizers', icon: <FaUserTie />, path: `/dashboard/admin/organizers` },
    { name: 'Manage Events', icon: <FaCalendarAlt />, path: `/dashboard/admin/events` },
    { name: 'Bookings', icon: <FaTicketAlt />, path: `/dashboard/admin/bookings` },
    { name: 'Reviews', icon: <FaComments />, path: `/dashboard/admin/reviews` },
    { name: 'Settings', icon: <FaCog />, path: `/dashboard/admin/settings` },
  ];

  return (
    <div className="flex h-screen bg-gray-100 mt-[50px] mb-[100px]">
      {/* Sidebar */}
      <div className={`bg-primary text-white ${isSidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-blue-800 flex items-center justify-between">
          {!isSidebarCollapsed && <h2 className="text-xl font-bold">E-Tech Admin</h2>}
          <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSidebarCollapsed ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              )}
            </svg>
          </button>
        </div>

        {/* Admin Profile */}
        <div className="p-4 border-b border-blue-800">
          <div className="flex items-center">
            <img src={adminData.avatar} alt="Admin" className="w-10 h-10 rounded-full" />
            {!isSidebarCollapsed && (
              <div className="ml-3">
                <p className="font-medium">{adminData.name}</p>
                <p className="text-sm text-blue-200">{adminData.role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-3 hover:bg-blue-800 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isSidebarCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-blue-800">
          <button className="flex items-center text-white hover:text-blue-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
              <path d="M8 11a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            </svg>
            {!isSidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="relative">
                <button className="flex items-center focus:outline-none">
                  <img src={adminData.avatar} alt="Admin" className="w-8 h-8 rounded-full" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
