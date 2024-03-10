// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysL-5rUG9J5clTNwEGd68F9XaMZZDSX4",
  authDomain: "reactreduxdeployed.firebaseapp.com",
  projectId: "reactreduxdeployed",
  storageBucket: "reactreduxdeployed.appspot.com",
  messagingSenderId: "558356675270",
  appId: "1:558356675270:web:998fffc28fc49fd7b835c7",
  measurementId: "G-XSK6TE05E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
export const auth = getAuth(app);
