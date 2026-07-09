// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8fxGNNfOr22CwOvV7xPGGHEPJfUPjwE",
  authDomain: "cybersafeai-3a6e0.firebaseapp.com",
  projectId: "cybersafeai-3a6e0",
  storageBucket: "cybersafeai-3a6e0.firebasestorage.app",
  messagingSenderId: "268897273650",
  appId: "1:268897273650:web:78a4353c17c15d4b43f92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);