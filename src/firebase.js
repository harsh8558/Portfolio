import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEB89CxeQHSHP7jYe2I12BZbAZan0mMbg",
  authDomain: "portfolio-460e4.firebaseapp.com",
  projectId: "portfolio-460e4",
  storageBucket: "portfolio-460e4.firebasestorage.app",
  messagingSenderId: "917488267714",
  appId: "1:917488267714:web:760dae5c08fe0b1dbf665b",
  measurementId: "G-WKJQ0L5RWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };