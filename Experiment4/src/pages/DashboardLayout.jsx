import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard Layout
          </Typography>
          <Button color="inherit" component={Link} to="summary">
            Summary
          </Button>
          <Button color="inherit" component={Link} to="analytics">
            Analytics
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;