import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import StudentDashboard from "../pages/StudentDashboard";
import FacultyDashboard from "../pages/FacultyDashboard";
import AdminDashboard from "../pages/AdminDashboard";

import Chat from "../pages/Chat";
import ChatHistory from "../pages/ChatHistory";
import Appointment from "../pages/Appointment";
import Prediction from "../pages/Prediction";
import PDFChat from "../pages/PDFChat";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<MainLayout />}>

          {/* Student Dashboard */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* Faculty Dashboard */}
          <Route
            path="/faculty/dashboard"
            element={
              <ProtectedRoute allowedRoles={["faculty"]}>
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Shared Features */}
          <Route
            path="/chat"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty"]}>
                <Chat />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat-history"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty"]}>
                <ChatHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointment"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty"]}>
                <Appointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/prediction"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Prediction />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pdf"
            element={
              <ProtectedRoute allowedRoles={["student", "faculty"]}>
                <PDFChat />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;