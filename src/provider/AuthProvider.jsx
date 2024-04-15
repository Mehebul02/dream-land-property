import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";

export const AuthContext = createContext(null);
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update profille 
  const updateProfile =(name,image)=>{
  return updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: image
    })
  }
  // sign in user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
//   log Out 
const logOut =()=>{
    return signOut(auth)
}
  // gitHub Login
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      setUser(currentUser);
      console.log("Tui Sob Somoy Thakbi",currentUser);
    });
    return()=>{
        unSubScribe()
    }
  }, []);
  const authInfo = {
    user,
    createUser,
    loginUser,
    gitHubLogin,
    logOut,
    loading,
    updateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
