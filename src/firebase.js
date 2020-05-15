
import firebase from "firebase/app"
import "firebase/firestore" 
import "firebase/storage"
import "firebase/auth"


// Kode fra Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "firestore-og-annet-moro.firebaseapp.com",
    databaseURL: "https://firestore-og-annet-moro.firebaseio.com",
    projectId: "firestore-og-annet-moro",
    storageBucket: "firestore-og-annet-moro.appspot.com",
    messagingSenderId: "355229019935",
    appId: "1:355229019935:web:c8cd451327d8074d1b0a2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const storage = firebase.storage()
export const db = firebase.firestore()
