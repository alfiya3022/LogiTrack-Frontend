// src/components/common/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="LogiTrack company logo, stylized text with a delivery truck icon, set against a white background"
            className="h-9 w-auto"
          />
          <span className="font-bold text-xl">LogiTrack</span>
        </Link>
        
        {/* Navigation Menu */}
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-6 text-base">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-800 font-semibold"
                    : "text-gray-700 hover:text-purple-800"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/track"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-800 font-semibold"
                    : "text-gray-700 hover:text-purple-800"
                }
              >
                Track Shipment
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-800 font-semibold"
                      : "text-gray-700 hover:text-purple-800"
                  }
                >
                  AI Dashboard
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-800 font-semibold"
                    : "text-gray-700 hover:text-purple-800"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-800 font-semibold"
                    : "text-gray-700 hover:text-purple-800"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Auth Section */}
          <div className="flex items-center space-x-3 ml-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-md transition-colors"
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                  <span className="text-gray-700 font-medium">{user?.firstName}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                      <p className="text-xs text-purple-600">{user?.company}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      🤖 AI Dashboard
                    </Link>
                    <Link
                      to="/track"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📦 Track Shipments
                    </Link>
                    <div className="border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-purple-800 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition font-medium"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
