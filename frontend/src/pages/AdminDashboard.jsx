import { useEffect, useState } from "react";
import api from "../services/api";

import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

import { Typography } from "@mui/material";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setStats(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load dashboard.");
    }
  };

  return (
    <div>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Admin Dashboard
      </Typography>

      <StatsCards />

      <AnalyticsChart stats={stats} />
    </div>
  );
}

export default AdminDashboard;