// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUOqjtPNbmUgY71MJo1nPqZM8lat12to0",
    authDomain: "ecommerce-site-d7a1a.firebaseapp.com",
    projectId: "ecommerce-site-d7a1a",
    storageBucket: "ecommerce-site-d7a1a.appspot.com",
    messagingSenderId: "56563929417",
    appId: "1:56563929417:web:637d877819ff2a9aeaca98"
  };
  
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;