import {Children,createContext} from "react";

const AuthContext = createContext(null);


export const AuthProvider= ({children}) =>{

    const [isAuthenticated,setIsAuthenticated] = useState(false);


    returun (

        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
        {Children}
        </AuthContext.Provider>

    )
    
    

}


export const useAuth = () => useContext(AuthContext);