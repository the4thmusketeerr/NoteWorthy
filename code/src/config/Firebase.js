// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMJDr1LsSD7lWtFZ3w87ERmgNKlWRNHx0",
  authDomain: "noteworthy-cabd3.firebaseapp.com",
  databaseURL: "https://noteworthy-cabd3-default-rtdb.firebaseio.com",
  projectId: "noteworthy-cabd3",
  storageBucket: "noteworthy-cabd3.appspot.com",
  messagingSenderId: "1016305354618",
  appId: "1:1016305354618:web:503e927ec21843f9e3b8c3",
  measurementId: "G-VC902QVDYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase()
export const auth = getAuth()