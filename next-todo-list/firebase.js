// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQbPt3XQAjz2hAYMaoDq8SkCUUqf84bIM",
  authDomain: "todo-list-6a6a8.firebaseapp.com",
  projectId: "todo-list-6a6a8",
  storageBucket: "todo-list-6a6a8.appspot.com",
  messagingSenderId: "198303149462",
  appId: "1:198303149462:web:bae1afdfb712e4885441b7",
  measurementId: "G-NX6TF7P9TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);