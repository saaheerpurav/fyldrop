import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8wpG2WlaOnNdP-z1utctsQSAolnh8gfY",
  authDomain: "file-transfer-66619.firebaseapp.com",
  databaseURL: "https://file-transfer-66619-default-rtdb.firebaseio.com",
  projectId: "file-transfer-66619",
  storageBucket: "file-transfer-66619.appspot.com",
  messagingSenderId: "36730200841",
  appId: "1:36730200841:web:8832b865063feb5e52a9d8",
  measurementId: "G-G2RTPR3XGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);