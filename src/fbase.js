// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SEDDER_ID,
    appId: process.env.REACT_APP_API_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
export const authService = getAuth();// firebase.auth();

//export const firebaseInstance = app;

//export default authService;
