// FIX: Changed import from 'firebase/app' to '@firebase/app' to resolve a module export error.
import { initializeApp } from "@firebase/app";
// FIX: Changed import from 'firebase/firestore' to '@firebase/firestore' for consistency.
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCepqfYX3FxHRQRVmd9RbASmkUHBGnbvVE",
    authDomain: "faq-real.firebaseapp.com",
    databaseURL: "https://faq-real-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "faq-real",
    storageBucket: "faq-real.firebasestorage.app",
    messagingSenderId: "30816639570",
    appId: "1:30816639570:web:05ad1e97e8d6e7d1471d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
