// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp3EKaKklB9n4Chl9vp05h5sbNIo-M5uY",
    authDomain: "grocery-ba652.firebaseapp.com",
    projectId: "grocery-ba652",
    storageBucket: "grocery-ba652.appspot.com",
    messagingSenderId: "153846410972",
    appId: "1:153846410972:web:777047512a37dbfef50e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);