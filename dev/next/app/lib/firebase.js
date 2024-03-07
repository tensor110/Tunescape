// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlqlCxGjIS16NlpEUhD3WS97FajZ8188I",
  authDomain: "tunescape-c29b2.firebaseapp.com",
  projectId: "tunescape-c29b2",
  storageBucket: "tunescape-c29b2.appspot.com",
  messagingSenderId: "37327276361",
  appId: "1:37327276361:web:b0e4f963d5e117c829f298",
  measurementId: "G-WH67XGNXS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
