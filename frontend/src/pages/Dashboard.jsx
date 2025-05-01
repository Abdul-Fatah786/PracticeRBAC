import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Your Dashboard</h1>
                        <p className="text-lg opacity-90">You're viewing protected content</p>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 mb-12">
                            {/* Quick Stats */}
                            <div className="bg-blue-50 p-6 rounded-xl flex-1">
                                <h3 className="font-semibold text-blue-700 text-lg mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Your Activity
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                        <div className="text-2xl font-bold text-blue-600">12</div>
                                        <div className="text-sm text-gray-500">Projects</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                        <div className="text-2xl font-bold text-blue-600">24</div>
                                        <div className="text-sm text-gray-500">Tasks</div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-indigo-50 p-6 rounded-xl flex-1">
                                <h3 className="font-semibold text-indigo-700 text-lg mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Recent Activity
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Logged in successfully",
                                        "Updated profile information",
                                        "Completed project setup"
                                    ].map((activity, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                                            <span className="text-gray-700">{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Welcome Message */}
                        <div className="bg-gray-50 p-6 rounded-xl mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hello there!</h3>
                                    <p className="text-gray-600">
                                        Welcome back to your secure dashboard. This area is protected and only accessible to authenticated users. 
                                        You can view your stats, recent activity, and manage your account settings here.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <div className="text-center">
                            <button 
                                onClick={handleLogout}
                                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 inline-flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;