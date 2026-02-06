import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ mt: 3, mb: 2 }}
        >
          Login to EcoTrack
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
