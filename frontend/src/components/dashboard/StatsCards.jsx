import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function StatsCards() {
  const [stats, setStats] = useState({
    users: 0,
    students: 0,
    faculty: 0,
    appointments: 0,
    chats: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setStats(res.data);
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
    }
  };

  const cards = [
    {
      title: "Total Users",
      value: stats.users,
    },
    {
      title: "Students",
      value: stats.students,
    },
    {
      title: "Faculty",
      value: stats.faculty,
    },
    {
      title: "Appointments",
      value: stats.appointments,
    },
    {
      title: "AI Chats",
      value: stats.chats,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 5 }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={card.title}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 8,
              },
            }}
          >
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                {card.title}
              </Typography>

              <Typography variant="h4" fontWeight="bold">
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsCards;