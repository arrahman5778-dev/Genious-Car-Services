// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD32nVRfgVi36fPuRpapJ4XIGudsSJkOBI",
  authDomain: "genious-car-services-bcd04.firebaseapp.com",
  projectId: "genious-car-services-bcd04",
  storageBucket: "genious-car-services-bcd04.appspot.com",
  messagingSenderId: "339140487693",
  appId: "1:339140487693:web:e97a4842c2eed693254344",
  measurementId: "G-WPCXHS453K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export default auth