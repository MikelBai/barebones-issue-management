import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFG-MbawWEt2pnTFoEm3-rnvSN-LLulNU",
    authDomain: "issue-tracker-1305e.firebaseapp.com",
    databaseURL: "https://issue-tracker-1305e.firebaseio.com",
    projectId: "issue-tracker-1305e",
    storageBucket: "issue-tracker-1305e.appspot.com",
    messagingSenderId: "963359780509",
    appId: "1:963359780509:web:283c20292df28d24d72e74",
    measurementId: "G-50RKBCYCYN"
  });

const db = firebaseApp.firestore();
export default db