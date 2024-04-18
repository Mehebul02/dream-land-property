// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  // apiKey: "AIzaSyDQxBxfBBL7m_gFLSOax3R2qlKkbRuG2QI",
  // authDomain: "dream-land-property-ae511.firebaseapp.com",
  // projectId: "dream-land-property-ae511",
  // storageBucket: "dream-land-property-ae511.appspot.com",
  // messagingSenderId: "477457103146",
  // appId: "1:477457103146:web:955c94902ab0ae605ec653"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth