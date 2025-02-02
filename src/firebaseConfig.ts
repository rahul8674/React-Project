// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrfW8NwODeLqu8Xq1Yca1zTmmHu-7vVuA",
    authDomain: "react-project-126f2.firebaseapp.com",
    projectId: "react-project-126f2",
    storageBucket: "react-project-126f2.firebasestorage.app",
    messagingSenderId: "224534177824",
    appId: "1:224534177824:web:97d8641ba67c95aa5ef445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };