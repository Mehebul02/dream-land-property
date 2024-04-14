import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase_config";

const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const createUser =(email,password)=>{
        // const [user,setUser] = useState(null)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        // user,
        createUser,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;