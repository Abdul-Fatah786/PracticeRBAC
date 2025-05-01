import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ isAuthenticated, setAuth }) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
        navigate('/login');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Reusable nav link styles
    const navLinkStyles = "rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition duration-150";
    const desktopLinkStyles = `px-3 py-2 text-sm font-medium ${navLinkStyles}`;
    const mobileLinkStyles = `block px-3 py-2 text-base font-medium ${navLinkStyles}`;

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-indigo-600">
                                MyApp
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {!isAuthenticated ? (
                            <div className="flex space-x-4">
                                <Link
                                    to="/login"
                                    className={desktopLinkStyles}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className={desktopLinkStyles}
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className={desktopLinkStyles}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Dynamic icons based on menu state */}
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - conditionally rendered based on state */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="pt-2 pb-3 space-y-1">
                        {!isAuthenticated ? (
                            <>
                                <Link
                                    to="/login"
                                    className={mobileLinkStyles}
                                    onClick={toggleMobileMenu}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className={mobileLinkStyles}
                                    onClick={toggleMobileMenu}
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMobileMenu();
                                }}
                                className={`w-full text-left ${mobileLinkStyles}`}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar