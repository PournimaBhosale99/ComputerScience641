// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZBwfD50GfT3qcBZX64aLJ29p98idTQqs",
  authDomain: "ecommerce-app-1a2f9.firebaseapp.com",
  projectId: "ecommerce-app-1a2f9",
  storageBucket: "ecommerce-app-1a2f9.firebasestorage.app",
  messagingSenderId: "473372456000",
  appId: "1:473372456000:web:17154b7ef87cc56ecb5ba5",
  measurementId: "G-8YDJEFMCZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };