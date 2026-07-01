import { useEffect, useState } from "react";
import axios from "axios";

import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

import { Typography } from "@mui/material";

function AdminDashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    const res = await axios.get(
      "http://127.0.0.1:8000/admin/dashboard"
    );

    setStats(res.data);

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