// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-project-34b57.firebaseapp.com",
  projectId: "real-estate-project-34b57",
  storageBucket: "real-estate-project-34b57.appspot.com",
  messagingSenderId: "978984126039",
  appId: "1:978984126039:web:82253118efe84412d18512",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
