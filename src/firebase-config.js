import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBvqHK8xDYO831yqiGvogGI8UbIlRmUyVU",
    authDomain: "react-firebase-7640f.firebaseapp.com",
    projectId: "react-firebase-7640f",
    storageBucket: "react-firebase-7640f.appspot.com",
    messagingSenderId: "540045700529",
    appId: "1:540045700529:web:69b9bf5aaee108bf126190",
    measurementId: "G-TMEBSWKWLP"
};

const app = initializeApp(firebaseConfig);;

export const firebaseAuth = getAuth(app);
