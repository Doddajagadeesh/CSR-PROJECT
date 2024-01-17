// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAog0AjhS9jTYcjaASh69YF1tXgyFEqet0",
  authDomain: "my-csr-project.firebaseapp.com",
  projectId: "my-csr-project",
  storageBucket: "my-csr-project.appspot.com",
  messagingSenderId: "729790980634",
  appId: "1:729790980634:web:63b1ff0757b83a8e6567a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);