import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HistoryIcon from "@mui/icons-material/History";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LogoutIcon from "@mui/icons-material/Logout";
import SchoolIcon from "@mui/icons-material/School";

const drawerWidth = 260;

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const studentMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/student/dashboard" },
    { text: "AI Chat", icon: <SmartToyIcon />, path: "/chat" },
    { text: "Chat History", icon: <HistoryIcon />, path: "/chat-history" },
    { text: "Appointments", icon: <EventIcon />, path: "/appointment" },
    { text: "Prediction", icon: <AnalyticsIcon />, path: "/prediction" },
    { text: "PDF AI", icon: <PictureAsPdfIcon />, path: "/pdf" },
  ];

  const facultyMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/faculty/dashboard" },
    { text: "AI Chat", icon: <SmartToyIcon />, path: "/chat" },
    { text: "Chat History", icon: <HistoryIcon />, path: "/chat-history" },
    { text: "Appointments", icon: <EventIcon />, path: "/appointment" },
    { text: "PDF AI", icon: <PictureAsPdfIcon />, path: "/pdf" },
  ];

  const adminMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  ];

  const menu =
    role === "student"
      ? studentMenu
      : role === "faculty"
      ? facultyMenu
      : adminMenu;

  return (
    <Box sx={{ display: "flex", background: "#f4f7fb", minHeight: "100vh" }}>
      {/* ================= NAVBAR ================= */}

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#fff",
          color: "#1e293b",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
          >
            IntelliCampus AI
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: "#2563eb" }}>
              {role?.charAt(0).toUpperCase()}
            </Avatar>

            <Typography fontWeight={600}>
              {role}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= SIDEBAR ================= */}

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#0f172a",
            color: "white",
            border: "none",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ p: 3 }}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={4}
          >
            <SchoolIcon sx={{ fontSize: 35 }} />
            <Typography
              fontWeight="bold"
              fontSize={22}
            >
              IntelliCampus
            </Typography>
          </Box>

          <List>
            {menu.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 3,
                  mb: 1,
                  color: "white",

                  "&.Mui-selected": {
                    background: "#2563eb",
                  },

                  "&:hover": {
                    background: "#1e40af",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}

            <ListItemButton
              onClick={logout}
              sx={{
                borderRadius: 3,
                mt: 3,
                color: "#ffb4b4",

                "&:hover": {
                  background: "#7f1d1d",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#ffb4b4" }}>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* ================= PAGE ================= */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          mt: 8,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;