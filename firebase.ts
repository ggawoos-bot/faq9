// FIX: Changed imports to be compatible with Firebase v8 SDK which does not have a named 'initializeApp' export.
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCepqfYX3FxHRQRVmd9RbASmkUHBGnbvVE",
    authDomain: "faq-real.firebaseapp.com",
    databaseURL: "https://faq-real-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "faq-real",
    storageBucket: "faq-real.appspot.com",
    messagingSenderId: "30816639570",
    appId: "1:30816639570:web:05ad1e97e8d6e7d1471d8b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
