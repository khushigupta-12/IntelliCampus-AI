import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
} from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";

function AdminDashboard() {

  const navigate = useNavigate();

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

    }

  };

  const quickActions = [

    {
  title: "Manage Students",
  icon: <GroupIcon sx={{ fontSize: 45 }} />,
  color: "#2563eb",
  route: "/student/dashboard",
},
    {
  title: "Manage Faculty",
  icon: <SchoolIcon sx={{ fontSize: 45 }} />,
  color: "#16a34a",
  route: "/faculty/dashboard",
},
    {
      title: "Appointments",
      icon: <EventIcon sx={{ fontSize: 45 }} />,
      color: "#ea580c",
      route: "/appointment",
    },

    {
      title: "AI Analytics",
      icon: <SmartToyIcon sx={{ fontSize: 45 }} />,
      color: "#9333ea",
      route: "/chat",
    },

  ];

  return (

    <Box>

      {/* HERO */}

      <Paper
        elevation={0}
        sx={{
          mb: 5,
          p: 5,
          borderRadius: 5,
          color: "white",
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
        >
          Welcome Back, Admin 👋
        </Typography>

        <Typography
          mt={2}
          sx={{
            opacity: .9,
            fontSize: 18,
          }}
        >
          Monitor students, faculty, appointments and AI
          usage from one intelligent dashboard.
        </Typography>

        <Box
          mt={4}
          display="flex"
          gap={2}
          flexWrap="wrap"
        >

          <Button
            variant="contained"
            color="inherit"
            startIcon={<TrendingUpIcon />}
          >
            Dashboard Report
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
            }}
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>

        </Box>

      </Paper>

      {/* STATS */}

      <StatsCards />

      {/* ANALYTICS */}

      <Box mt={5}>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          Analytics Overview
        </Typography>

        <AnalyticsChart stats={stats} />

      </Box>

      {/* QUICK ACTIONS */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={6}
        mb={3}
      >
        Quick Actions
      </Typography>

      <Grid container spacing={4}>

        {quickActions.map((card) => (

          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            key={card.title}
          >

            <Card
              sx={{
                borderRadius: 5,
                transition: ".3s",
                height: "100%",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 10,
                },
              }}
            >

              <CardContent>

                <Avatar
                  sx={{
                    width: 75,
                    height: 75,
                    bgcolor: card.color + "20",
                    color: card.color,
                    mb: 3,
                  }}
                >
                  {card.icon}
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {card.title}
                </Typography>

                <Typography
                  mt={2}
                  color="text.secondary"
                >
                  Manage and monitor this module
                  efficiently.
                </Typography>

                <Button
                  fullWidth
                  sx={{
                    mt: 3,
                  }}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() =>
                    navigate(card.route)
                  }
                >
                  Open
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>
            {/* SYSTEM HEALTH */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={6}
        mb={3}
      >
        System Health
      </Typography>

      <Grid container spacing={4}>

        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 5,
              height: "100%",
            }}
          >

            <CardContent>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Platform Status
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography>Backend API</Typography>

                <Chip
                  icon={<VerifiedIcon />}
                  label="Online"
                  color="success"
                />
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography>Database</Typography>

                <Chip
                  icon={<VerifiedIcon />}
                  label="Connected"
                  color="success"
                />
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography>Gemini AI</Typography>

                <Chip
                  icon={<VerifiedIcon />}
                  label="Running"
                  color="success"
                />
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography>JWT Authentication</Typography>

                <Chip
                  icon={<VerifiedIcon />}
                  label="Secure"
                  color="success"
                />
              </Box>

            </CardContent>

          </Card>

        </Grid>

        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 5,
              height: "100%",
            }}
          >

            <CardContent>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                AI Insights
              </Typography>

              <Typography mb={2}>
                🤖 AI chats increased by <b>18%</b> today.
              </Typography>

              <Typography mb={2}>
                📅 12 new appointments booked.
              </Typography>

              <Typography mb={2}>
                🎓 Student registrations are growing steadily.
              </Typography>

              <Typography>
                📊 Overall platform performance is excellent.
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      {/* RECENT ACTIVITY */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={6}
        mb={3}
      >
        Recent Activity
      </Typography>

      <Card
        sx={{
          borderRadius: 5,
        }}
      >

        <CardContent>

          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
          >

            <Box>

              <Typography fontWeight="bold">
                👨‍🎓 New Student Registered
              </Typography>

              <Typography color="text.secondary">
                Student account created successfully.
              </Typography>

            </Box>

            <Chip
              label="2 min ago"
              color="primary"
            />

          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
          >

            <Box>

              <Typography fontWeight="bold">
                📅 Appointment Booked
              </Typography>

              <Typography color="text.secondary">
                Faculty meeting scheduled.
              </Typography>

            </Box>

            <Chip
              label="15 min ago"
              color="success"
            />

          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
          >

            <Box>

              <Typography fontWeight="bold">
                🤖 AI Chat Completed
              </Typography>

              <Typography color="text.secondary">
                Student received AI assistance.
              </Typography>

            </Box>

            <Chip
              label="30 min ago"
              color="secondary"
            />

          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
          >

            <Box>

              <Typography fontWeight="bold">
                📈 Performance Prediction
              </Typography>

              <Typography color="text.secondary">
                AI generated a prediction report.
              </Typography>

            </Box>

            <Chip
              label="1 hr ago"
              color="warning"
            />

          </Box>

        </CardContent>

      </Card>

    </Box>
  );
}

export default AdminDashboard;