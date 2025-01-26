import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEB89CxeQHSHP7jYe2I12BZbAZan0mMbg",
    authDomain: "portfolio-460e4.firebaseapp.com",
    projectId: "portfolio-460e4",
    storageBucket: "portfolio-460e4.firebasestorage.app",
    messagingSenderId: "890817433268",
    appId: "1:917488267714:web:760dae5c08fe0b1dbf665b"

    // apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
    // authDomain: "web-kelas-tes.firebaseapp.com",
    // projectId: "web-kelas-tes",
    // storageBucket: "web-kelas-tes.appspot.com",
    // messagingSenderId: "890817433268",
    // appId: "1:890817433268:web:11e5258f8864a6174c11e1"

//     apiKey: "AIzaSyDEB89CxeQHSHP7jYe2I12BZbAZan0mMbg",
//   authDomain: "portfolio-460e4.firebaseapp.com",
//   projectId: "portfolio-460e4",
//   storageBucket: "portfolio-460e4.firebasestorage.app",
//   messagingSenderId: "917488267714",
//   appId: "1:917488267714:web:760dae5c08fe0b1dbf665b",
//   measurementId: "G-WKJQ0L5RWW"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };