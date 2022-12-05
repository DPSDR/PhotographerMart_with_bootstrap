// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDrn94IyhmH7BVLPBB67C2IGC5JPcTSwg0',
    authDomain: 'photographermart-fcd63.firebaseapp.com',
    projectId: 'photographermart-fcd63',
    storageBucket: 'photographermart-fcd63.appspot.com',
    messagingSenderId: '748070019590',
    appId: '1:748070019590:web:671429751ae7f916945987'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;