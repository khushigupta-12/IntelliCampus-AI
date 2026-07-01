import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import { useNavigate } from "react-router-dom";
import StatsCards from "../components/dashboard/StatsCards";

function StudentDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "AI Assistant",
      description: "Ask Gemini AI any academic question and get instant answers.",
      icon: <SmartToyIcon sx={{ fontSize: 55 }} />,
      color: "#1976d2",
      route: "/chat",
    },
    {
      title: "Appointments",
      description: "Book appointments with faculty members easily.",
      icon: <EventIcon sx={{ fontSize: 55 }} />,
      color: "#43a047",
      route: "/appointment",
    },
    {
      title: "Performance Prediction",
      description: "Predict your semester performance using AI.",
      icon: <AnalyticsIcon sx={{ fontSize: 55 }} />,
      color: "#fb8c00",
      route: "/prediction",
    },
  ];

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Welcome Student 👋
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
      >
        Manage your academics using IntelliCampus AI.
      </Typography>

      <StatsCards />

      <Grid container spacing={4}>

        {cards.map((card) => (

          <Grid item xs={12} md={4} key={card.title}>

            <Card
              sx={{
                borderRadius: 4,
                height: "100%",
                boxShadow: 5,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 10,
                },
              }}
            >

              <CardContent>

                <Box
                  sx={{
                    color: card.color,
                    mb: 2,
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  variant="h5"
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

    </Box>
  );
}

export default StudentDashboard;