import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCUROZYvkOLNW2khqu-leVFZ9R1N34Be-c",
    authDomain: "instagram-clone-d9a3b.firebaseapp.com",
    projectId: "instagram-clone-d9a3b",
    storageBucket: "instagram-clone-d9a3b.appspot.com",
    messagingSenderId: "540674597502",
    appId: "1:540674597502:web:502b504a033590e8c9ae2f",
    measurementId: "G-N3GJW69JL9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage }
