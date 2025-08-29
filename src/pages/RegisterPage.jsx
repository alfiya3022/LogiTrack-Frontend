// src/pages/RegisterPage.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RegisterForm from "../components/auth/RegisterForm";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, loading, error, isAuthenticated, clearError } = useAuth();

  // Redirect if already authenticated - FIXED: Proper dependencies
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Clear errors on mount - FIXED: Safe dependency
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, []); // Run once on mount

  const handleRegister = async (formData) => {
    try {
      await register(formData);
      // Navigation will be handled by the useEffect above
    } catch (error) {
      console.error("Registration failed:", error);
      // Error is already handled by the context
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create your free account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Unlock AI-powered logistics intelligence
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Sign in to your dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
