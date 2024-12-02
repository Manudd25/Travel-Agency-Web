// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZOfTf1RuYf6_M_vJv2qWzjyvXkdIcKBI",
    authDomain: "travel-agency-web-20bb9.firebaseapp.com",
    databaseURL: "https://travel-agency-web-20bb9-default-rtdb.firebaseio.com",
    projectId: "travel-agency-web-20bb9",
    storageBucket: "travel-agency-web-20bb9.appspot.com",
    messagingSenderId: "353816814077",
    appId: "1:353816814077:web:29e55bef56a461021ef994"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;