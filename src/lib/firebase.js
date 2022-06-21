// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAih7C6YXcR3pNT03rjEPHGKhMSO9tsZbI",
  authDomain: "dx-workplace-51a14.firebaseapp.com",
  projectId: "dx-workplace-51a14",
  storageBucket: "dx-workplace-51a14.appspot.com",
  messagingSenderId: "276148332435",
  appId: "1:276148332435:web:4a108d4a5adeefc44f6a66",
  measurementId: "G-KXEXH7SFL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);