// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtdnkc9SzlZhS0D2I4guOJcWAwGCHv_Ws",
  authDomain: "school-management-5103d.firebaseapp.com",
  projectId: "school-management-5103d",
  storageBucket: "school-management-5103d.appspot.com",
  messagingSenderId: "967524368373",
  appId: "1:967524368373:web:1ebe0160f977005674eabc",
  measurementId: "G-8BPMMF07V3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);