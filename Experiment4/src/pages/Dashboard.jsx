import { Outlet, Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
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

export default Dashboard;