import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import PDFChat from "../pages/PDFChat";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import StudentDashboard from "../pages/StudentDashboard";
import FacultyDashboard from "../pages/FacultyDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Appointment from "../pages/Appointment";
import Prediction from "../pages/Prediction";
import Chat from "../pages/Chat";
import ChatHistory from "../pages/ChatHistory";

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
<Route
  path="/pdf"
  element={
    <ProtectedRoute>
      <PDFChat />
    </ProtectedRoute>
  }
/>
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat-history"
            element={
              <ProtectedRoute>
                <ChatHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointment"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/prediction"
            element={
              <ProtectedRoute>
                <Prediction />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty/dashboard"
            element={
              <ProtectedRoute>
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;