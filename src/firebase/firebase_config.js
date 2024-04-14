// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: "AIzaSyC0aPYjv9nPKnlL_xdEqrbPQbaJokTLW0s",
  authDomain: "dream-land-property.firebaseapp.com",
  projectId: "dream-land-property",
  storageBucket: "dream-land-property.appspot.com",
  messagingSenderId: "666912778929",
  appId: "1:666912778929:web:b0ae436e634a195f871090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth