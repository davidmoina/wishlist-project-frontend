// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFNrE2zgDRgZ9_jx8JcCqHgfcQyyrWceg",
  authDomain: "tasks-project-6f696.firebaseapp.com",
  projectId: "tasks-project-6f696",
  storageBucket: "tasks-project-6f696.appspot.com",
  messagingSenderId: "376855421223",
  appId: "1:376855421223:web:4ed332b422512c9b090902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);