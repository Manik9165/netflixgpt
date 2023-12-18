// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAipzw0YtYGJMDQY15baD3ercdV9SAlII",
  authDomain: "netflixgpt-df07c.firebaseapp.com",
  projectId: "netflixgpt-df07c",
  storageBucket: "netflixgpt-df07c.appspot.com",
  messagingSenderId: "537863003913",
  appId: "1:537863003913:web:2704b1b02df10f65b77dd8",
  measurementId: "G-K43NWSX53J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();