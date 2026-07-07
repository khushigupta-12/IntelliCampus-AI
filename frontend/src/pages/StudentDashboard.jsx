import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useNavigate } from "react-router-dom";
import StatsCards from "../components/dashboard/StatsCards";

function StudentDashboard() {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "AI Assistant",
      description: "Ask questions and get instant AI-powered academic support.",
      icon: <SmartToyIcon sx={{ fontSize: 50 }} />,
      color: "#2563eb",
      route: "/chat",
    },
    {
      title: "Appointments",
      description: "Book meetings with faculty and manage schedules easily.",
      icon: <EventIcon sx={{ fontSize: 50 }} />,
      color: "#16a34a",
      route: "/appointment",
    },
    {
      title: "Performance Prediction",
      description: "Predict your semester performance using AI insights.",
      icon: <AnalyticsIcon sx={{ fontSize: 50 }} />,
      color: "#ea580c",
      route: "/prediction",
    },
    {
      title: "PDF AI",
      description: "Upload notes or PDFs and ask questions instantly.",
      icon: <PictureAsPdfIcon sx={{ fontSize: 50 }} />,
      color: "#9333ea",
      route: "/pdf",
    },
  ];

  return (
    <Box>

      {/* HERO SECTION */}

      <Paper
        elevation={0}
        sx={{
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
          color: "white",
          borderRadius: 5,
          p: 5,
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
        >
          Welcome Back 👋
        </Typography>

        <Typography
          sx={{
            mt: 2,
            opacity: 0.9,
            fontSize: 18,
          }}
        >
          Manage your academics with AI-powered tools built to make
          learning smarter and more efficient.
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
            startIcon={<SmartToyIcon />}
            onClick={() => navigate("/chat")}
          >
            Ask AI
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
            }}
            startIcon={<EventIcon />}
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
            }}
            startIcon={<AnalyticsIcon />}
            onClick={() => navigate("/prediction")}
          >
            Predict Performance
          </Button>
        </Box>
      </Paper>

      {/* STATS */}

      <StatsCards />

      {/* QUICK ACTIONS */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Quick Actions
      </Typography>

      <Grid container spacing={4}>

        {quickActions.map((card) => (

          <Grid item xs={12} md={6} lg={3} key={card.title}>

            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
                boxShadow: 4,
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 10,
                },
              }}
            >

              <CardContent>

                <Box
                  sx={{
                    width: 75,
                    height: 75,
                    borderRadius: "50%",
                    background: card.color + "20",
                    color: card.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {card.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={2}
                  mb={3}
                >
                  {card.description}
                </Typography>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(card.route)}
                >
                  Open
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

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
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >
            <AutoAwesomeIcon color="primary" />

            <Box>

              <Typography fontWeight="bold">
                AI Chat Session Started
              </Typography>

              <Typography color="text.secondary">
                Ask academic questions and receive instant responses.
              </Typography>

            </Box>

          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >
            <EventIcon color="success" />

            <Box>

              <Typography fontWeight="bold">
                Appointment Module Available
              </Typography>

              <Typography color="text.secondary">
                Schedule meetings with faculty members.
              </Typography>

            </Box>

          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <AnalyticsIcon color="warning" />

            <Box>

              <Typography fontWeight="bold">
                Performance Prediction Ready
              </Typography>

              <Typography color="text.secondary">
                Predict your CGPA based on academic inputs.
              </Typography>

            </Box>

          </Box>

        </CardContent>
      </Card>

    </Box>
  );
}

export default StudentDashboard;