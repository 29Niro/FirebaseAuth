// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/compat/app";
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJefU2LdOnY6vEI0fIHMBrbX5nuvTAxnY",
  authDomain: "fir-auth-e0405.firebaseapp.com",
  projectId: "fir-auth-e0405",
  storageBucket: "fir-auth-e0405.appspot.com",
  messagingSenderId: "821386073224",
  appId: "1:821386073224:web:318a537181cd7dd2a27b3d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };