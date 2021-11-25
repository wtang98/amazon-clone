import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAAR2r-_viZ235kYSdiSrU2P1cDplbjsIk",
    authDomain: "clone-e9b58.firebaseapp.com",
    projectId: "clone-e9b58",
    storageBucket: "clone-e9b58.appspot.com",
    messagingSenderId: "645568970206",
    appId: "1:645568970206:web:a6819006f619ddbf53314f",
    measurementId: "G-NCH7DCJV9Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };