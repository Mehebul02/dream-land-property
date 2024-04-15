import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
        return <div className="flex justify-center items-center h-screen text-3xl"><ScaleLoader
        color="#36d7b7"
        height={100}
        width={20}
      /> </div>
      }
    if(user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;