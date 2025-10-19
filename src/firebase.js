// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 import Firestore

// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyC-Db9mkZx1vg1OQIZMzXlqbG3eyI4Gok4",
  authDomain: "realschoolandcollege.firebaseapp.com",
  projectId: "realschoolandcollege",
  storageBucket: "realschoolandcollege.firebasestorage.app",
  messagingSenderId: "738282696129",
  appId: "1:738282696129:web:af7d3f34a709a4a4325340",
  measurementId: "G-JNZ2MG1B5W"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);

// --- Initialize Services ---
const auth = getAuth(app);
const db = getFirestore(app); // 👈 create Firestore instance

// ✅ Export both so they can be imported anywhere
export { auth, db };
