// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAw6Fc-qIAkZ1edRyOub5FtZ7A_o2ri_jk",
  authDomain: "react-login-733bf.firebaseapp.com",
  projectId: "react-login-733bf",
  storageBucket: "react-login-733bf.appspot.com",
  messagingSenderId: "484418965555",
  appId: "1:484418965555:web:d8c273c598ca5f3a089346",
  measurementId: "G-9WP375XVS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);