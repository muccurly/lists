import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDAHDM44QfSsq1_xhRxMyhfr454oxSujs0",
    authDomain: "shopreactdb.firebaseapp.com",
    databaseURL: "https://shopreactdb.firebaseio.com",
    projectId: "shopreactdb",
    storageBucket: "shopreactdb.appspot.com",
    messagingSenderId: "1013965580529",
    appId: "1:1013965580529:web:4cace10e596c805dc72150"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
