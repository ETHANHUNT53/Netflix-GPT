// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5wr5X1o393b3bD0ECWoG42qIYRPrVAjI",
  authDomain: "netflixgpt-bb295.firebaseapp.com",
  projectId: "netflixgpt-bb295",
  storageBucket: "netflixgpt-bb295.firebasestorage.app",
  messagingSenderId: "194814887976",
  appId: "1:194814887976:web:68bb0185d6e3186b220d1d",
  measurementId: "G-ZEHSVV11F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();