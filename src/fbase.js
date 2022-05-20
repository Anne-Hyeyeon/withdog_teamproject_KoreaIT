import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDJE6CiDA6WUtIcq_jRJJxeVQUM5cIP4u8",
  authDomain: "withdog-ea0f1.firebaseapp.com",
  projectId: "withdog-ea0f1",
  storageBucket: "withdog-ea0f1.appspot.com",
  messagingSenderId: "333084771343",
  appId: "1:333084771343:web:32ef7a62299e9250364f7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();