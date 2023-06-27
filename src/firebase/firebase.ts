// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdJ7Jh9WpYavFngV43Iatvk2S38-J5NE",
  authDomain: "caffino-feedback-consumer.firebaseapp.com",
  projectId: "caffino-feedback-consumer",
  storageBucket: "caffino-feedback-consumer.appspot.com",
  messagingSenderId: "714092949912",
  appId: "1:714092949912:web:5c46041e00e1f1610b3bed"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};