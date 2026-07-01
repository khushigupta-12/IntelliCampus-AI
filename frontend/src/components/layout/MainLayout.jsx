import { Outlet, Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

const drawerWidth = 240;

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>

      <AppBar
        position="fixed"
        sx={{ zIndex: 1201 }}
      >
        <Toolbar>
          <Typography variant="h6">
            IntelliCampus AI
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
          },
        }}
      >
        <List>

          <ListItemButton component={Link} to="/student/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton component={Link} to="/chat">
            <ListItemText primary="AI Chat" />
          </ListItemButton>
<ListItemButton component={Link} to="/chat-history">
    <ListItemText primary="Chat History" />
</ListItemButton>
          <ListItemButton component={Link} to="/appointment">
            <ListItemText primary="Appointments" />
          </ListItemButton>
<ListItemButton component={Link} to="/pdf">
    <ListItemText primary="PDF AI" />
</ListItemButton>
          <ListItemButton component={Link} to="/prediction">
            <ListItemText primary="Prediction" />
          </ListItemButton>

          <ListItemButton component={Link} to="/faculty/dashboard">
            <ListItemText primary="Faculty" />
          </ListItemButton>

          <ListItemButton component={Link} to="/admin/dashboard">
            <ListItemText primary="Admin" />
          </ListItemButton>
<ListItemButton
    onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }}
>

    <LogoutIcon sx={{ mr: 2 }} />

    <ListItemText primary="Logout" />

</ListItemButton>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "70px",
          marginLeft: "240px",
        }}
      >
        <Outlet />
      </Box>

    </Box>
  );
}

export default MainLayout;