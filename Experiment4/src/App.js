import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"));
const DashboardAnalytics = React.lazy(() =>
  import("./pages/DashboardAnalytics")
);
const DashboardLayout = React.lazy(() => import("./pages/DashboardLayout"));
const DashboardSummary = React.lazy(() => import("./pages/DashboardSummary"));
const Login = React.lazy(() => import("./pages/Login"));
const Logs = React.lazy(() => import("./pages/Logs"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",+
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="summary" element={<DashboardSummary />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/dashboard-layout" element={<DashboardLayout />}>
            <Route path="summary" element={<DashboardSummary />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;