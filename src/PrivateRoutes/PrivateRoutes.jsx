import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { ScaleLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(user){
       return children
    }
    return  <Navigate  to='/login' state={location?.pathname || '/'}></Navigate>
       
    
};

export default PrivateRoutes;