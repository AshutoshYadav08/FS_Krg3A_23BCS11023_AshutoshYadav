
import { Link } from "react-router-dom";
import { useUser } from "./context/UserContext";

const Login = () => {
  const { isLoggedIn, toggleLogin } = useUser();

  return (
    <main>
      <h1>Login</h1>
      <p>Status: {isLoggedIn ? "Logged in" : "Logged out"}</p>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <Link to="/dashboard">Dashboard</Link>
    </main>
  );
};

export default Login;
