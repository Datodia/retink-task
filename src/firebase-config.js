import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDq_JRxfv1AyNwUyG5f7udxvzx87dxxJRA",
    authDomain: "auth-page-a9a15.firebaseapp.com",
    projectId: "auth-page-a9a15",
    storageBucket: "auth-page-a9a15.appspot.com",
    messagingSenderId: "53560622114",
    appId: "1:53560622114:web:49d7e855ea8e2b378dde7b",
    measurementId: "G-E5WV1MCQWP"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)