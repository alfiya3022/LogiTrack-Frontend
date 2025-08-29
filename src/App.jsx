// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TrackingProvider } from "./context/TrackingContext";
import { DashboardProvider } from "./context/DashboardContext";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Import pages
import Home from "./pages/Home";
import TrackShipment from "./pages/TrackShipment";
import AIDashboard from "./pages/AIDashboard";
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <TrackingProvider>
        <DashboardProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/track" element={<TrackShipment />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <AIDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/signup" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </DashboardProvider>
      </TrackingProvider>
    </AuthProvider>
  );
}

export default App;
