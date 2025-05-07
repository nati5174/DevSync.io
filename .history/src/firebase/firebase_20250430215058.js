// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWLQaAbdZj2gwve7o29CpBJ_6ruzWyNl4",
  authDomain: "devsync-7ff55.firebaseapp.com",
  projectId: "devsync-7ff55",
  storageBucket: "devsync-7ff55.firebasestorage.app",
  messagingSenderId: "785317866340",
  appId: "1:785317866340:web:6ea59858cbfac4aee0a871",
  measurementId: "G-1NLTJX90HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export 
