import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0KDx1DC-C4e5inEYD3GGvsBGXsduPb5c",
  authDomain: "toney-tool-inventory.firebaseapp.com",
  projectId: "toney-tool-inventory",
  storageBucket: "toney-tool-inventory.firebasestorage.app",
  messagingSenderId: "85130958660",
  appId: "1:85130958660:web:65b39dcfa00a73266ae911",
  measurementId: "G-07LMZPCN2G"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };