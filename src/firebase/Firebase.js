import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn1hW_5fLGI2ESmjToK2FGaZrkG6ho59Q",
  authDomain: "verahpure.firebaseapp.com",
  projectId: "verahpure",
  storageBucket: "verahpure.appspot.com",
  messagingSenderId: "963542235308",
  appId: "1:963542235308:web:e548ba5de79636006c0709",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

export default app;
