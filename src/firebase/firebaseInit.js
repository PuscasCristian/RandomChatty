import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Imports everything needed from firebase 

firebase.initializeApp({ // firebase setup with env.local for security
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const auth = firebase.auth(); // sets up auth
const firestore = firebase.firestore(); //sets up firestore

export { //export auth & firestore
    auth, firestore 
};
