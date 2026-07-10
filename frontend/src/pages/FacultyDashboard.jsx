import { useEffect, useState } from "react";
import api from "../services/api";

import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function FacultyDashboard() {

 const [appointments, setAppointments] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {

    try {

      const res = await api.get("/appointments/");

      setAppointments(res.data || []);

    } catch (error) {

      console.error(error);

      alert("Failed to load appointments.");

    }finally {

  setLoading(false);

}

  };

  return (

    <Box>

      {/* HERO */}

      <Paper
        elevation={0}
        sx={{
          p: 5,
          mb: 5,
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
          Faculty Dashboard 👨‍🏫
        </Typography>

        <Typography
          mt={2}
          sx={{
            opacity: .9,
            fontSize: 18,
          }}
        >
          Manage appointments and interact with students efficiently.
        </Typography>

      </Paper>

      {/* OVERVIEW */}

      <Grid container spacing={4} mb={5}>

        <Grid item xs={12} md={4}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#2563eb20",
                  color: "#2563eb",
                  width: 70,
                  height: 70,
                  mb: 2,
                }}
              >
                <EventIcon fontSize="large" />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {appointments.length}
              </Typography>

              <Typography color="text.secondary">
                Total Appointments
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid item xs={12} md={4}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#16a34a20",
                  color: "#16a34a",
                  width: 70,
                  height: 70,
                  mb: 2,
                }}
              >
                <GroupsIcon fontSize="large" />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {appointments.length}
              </Typography>

              <Typography color="text.secondary">
                Students Scheduled
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid item xs={12} md={4}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#9333ea20",
                  color: "#9333ea",
                  width: 70,
                  height: 70,
                  mb: 2,
                }}
              >
                <SchoolIcon fontSize="large" />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                Active
              </Typography>

              <Typography color="text.secondary">
                Faculty Status
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Upcoming Appointments
      </Typography>
            <Grid container spacing={3}>

       {loading ? (

  <Grid item xs={12}>
    <Card sx={{ borderRadius: 5 }}>
      <CardContent>
        <Typography align="center">
          Loading appointments...
        </Typography>
      </CardContent>
    </Card>
  </Grid>

) : appointments.length === 0 ? (

          <Grid item xs={12}>

            <Card
              sx={{
                borderRadius: 5,
                textAlign: "center",
                py: 6,
              }}
            >

              <CardContent>

                <Avatar
                  sx={{
                    bgcolor: "#2563eb",
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <EventIcon />
                </Avatar>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
                  No Appointments Found
                </Typography>

                <Typography
                  mt={2}
                  color="text.secondary"
                >
                  Your upcoming appointments will appear here.
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ) : (

          appointments.map((item) => (

            <Grid
              item
              xs={12}
              md={6}
              key={item.id}
            >

              <Card
                sx={{
                  borderRadius: 5,
                  height: "100%",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >

                <CardContent>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                    >
                      Appointment #{item.id}
                    </Typography>

                    <Chip
                      label="Scheduled"
                      color="success"
                    />

                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >

                    <GroupsIcon color="primary" />

                    <Typography>
                      Student ID:
                      <b> {item.student_id}</b>
                    </Typography>

                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >

                    <SchoolIcon
                      color="secondary"
                    />

                    <Typography>
                      Faculty ID:
                      <b> {item.faculty_id}</b>
                    </Typography>

                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >

                    <EventIcon color="success" />

                    <Typography>
                      {item.appointment_date}
                    </Typography>

                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={3}
                  >

                    <AccessTimeIcon
                      color="warning"
                    />

                    <Typography>
                      {item.appointment_time}
                    </Typography>

                  </Box>

                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: "#f8fafc",
                      borderRadius: 3,
                    }}
                  >

                    <Typography
                      fontWeight="bold"
                      mb={1}
                    >
                      Reason
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      {item.reason || "No reason provided"}
                    </Typography>

                  </Paper>

                </CardContent>

              </Card>

            </Grid>

          ))

        )}

      </Grid>

    </Box>

  );

}

export default FacultyDashboard;