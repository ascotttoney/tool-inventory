// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as googleapi from './.env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: googleapi,
  authDomain: "toney-tool-inventory.firebaseapp.com",
  projectId: "toney-tool-inventory",
  storageBucket: "toney-tool-inventory.firebasestorage.app",
  messagingSenderId: "85130958660",
  appId: "1:85130958660:web:65b39dcfa00a73266ae911",
  measurementId: "G-07LMZPCN2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);