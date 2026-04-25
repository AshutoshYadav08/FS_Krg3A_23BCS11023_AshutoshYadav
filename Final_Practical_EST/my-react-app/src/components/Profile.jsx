import { useUser } from "../context/UserContext";

const Profile = () => {
  const { username } = useUser();

  return <h2>Logged in user: {username}</h2>;
};

export default Profile;
