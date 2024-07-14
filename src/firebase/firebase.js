// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJRQ1OQCpqh_ag2pKjxz-MkSKFVWdV5ck",
  authDomain: "simpleauth4dashboard.firebaseapp.com",
  projectId: "simpleauth4dashboard",
  storageBucket: "simpleauth4dashboard.appspot.com",
  messagingSenderId: "98320295231",
  appId: "1:98320295231:web:6fe38cb6ac630ae56cdf8a",
  measurementId: "G-G3XLPCWVPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export { app, auth }