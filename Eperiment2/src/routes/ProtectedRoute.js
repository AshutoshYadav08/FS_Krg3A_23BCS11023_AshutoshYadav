import { Navigate, replace } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({Children} ) =>{

    const {isAuthenticated} = useAuth;

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }


    return Children;




}

export default ProtectedRoute;