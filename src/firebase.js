// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZodWWY95vCn6pcnIU27Vi1Nm5rYQzThU",
  authDomain: "proviser-ce32a.firebaseapp.com",
  projectId: "proviser-ce32a",
  storageBucket: "proviser-ce32a.firebasestorage.app",
  messagingSenderId: "623683370559",
  appId: "1:623683370559:web:7104e1d0c1a9a45aa1428a",
  measurementId: "G-QRMK1MT826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
