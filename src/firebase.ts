// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWoxzc8jFsJ2wx5EO5kIUmSjWoQLuiteo",
  authDomain: "swipeswap-c9db4.firebaseapp.com",
  projectId: "swipeswap-c9db4",
  storageBucket: "swipeswap-c9db4.appspot.com",
  messagingSenderId: "174689518537",
  appId: "1:174689518537:web:a94b8d49e9a944101f5e18",
  measurementId: "G-6B746465RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app;