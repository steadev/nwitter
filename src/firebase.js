// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2w9MBOYknEYGIXykw2f3PKf0pYg-8bHc",
  authDomain: "nwitter-5f70d.firebaseapp.com",
  projectId: "nwitter-5f70d",
  storageBucket: "nwitter-5f70d.appspot.com",
  messagingSenderId: "847601665475",
  appId: "1:847601665475:web:eac22b720fb273efdf2976"
};

export const app = initializeApp(firebaseConfig);
export const fAuth = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();