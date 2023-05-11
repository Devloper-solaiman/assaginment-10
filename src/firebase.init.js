// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGsI_2-BK0bsM5E9qitbf434WisP4SAsc",
    authDomain: "assignment-10-134f5.firebaseapp.com",
    projectId: "assignment-10-134f5",
    storageBucket: "assignment-10-134f5.appspot.com",
    messagingSenderId: "494482860663",
    appId: "1:494482860663:web:922725ca9462fca16ff472",
    measurementId: "G-Z5T6VE2SS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;