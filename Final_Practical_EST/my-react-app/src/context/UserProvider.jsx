import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [username] = useState("Arjun");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => setIsLoggedIn((value) => !value);

  return (
    <UserContext.Provider
      value={{
        username,
        isLoggedIn,
        isAuthenticated: isLoggedIn,
        toggleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
