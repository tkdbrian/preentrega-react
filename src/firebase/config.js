import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhP6MwnW8XT6k_ckbJKYIZN9xc5KQvO9Q",
  authDomain: "tkd-store.firebaseapp.com",
  projectId: "tkd-store",
  storageBucket: "tkd-store.firebasestorage.app",
  messagingSenderId: "924556449136",
  appId: "1:924556449136:web:5c0bbc4741c63bf8ceebb5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
