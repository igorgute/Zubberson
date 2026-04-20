import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";

// Passageiro
import CreateRide from "../pages/Passenger/CreateRide";
import MyRides from "../pages/Passenger/MyRides";

// Motorista
import DriverProfile from "../pages/Driver/DriverProfile";
import VehicleForm from "../pages/Driver/VehicleForm";
import DriverRides from "../pages/Driver/DriverRides";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Passageiro */}
        <Route
          path="/passenger/create-ride"
          element={
            <ProtectedRoute>
              <CreateRide />
            </ProtectedRoute>
          }
        />

        <Route
          path="/passenger/my-rides"
          element={
            <ProtectedRoute>
              <MyRides />
            </ProtectedRoute>
          }
        />

        {/* Motorista */}
        <Route
          path="/driver/profile"
          element={
            <ProtectedRoute>
              <DriverProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/vehicle"
          element={
            <ProtectedRoute>
              <VehicleForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/rides"
          element={
            <ProtectedRoute>
              <DriverRides />
            </ProtectedRoute>
          }
        />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}