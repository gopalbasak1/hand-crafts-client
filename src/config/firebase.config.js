// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_A5AWUUKu7bv_DV7u-PJLlSL9QkZrb0w",
  authDomain: "hand-craft-client.firebaseapp.com",
  projectId: "hand-craft-client",
  storageBucket: "hand-craft-client.appspot.com",
  messagingSenderId: "5974909978",
  appId: "1:5974909978:web:9b2d3135791754ea5b5da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;