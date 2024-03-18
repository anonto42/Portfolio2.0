import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKKlgd0v_IHKJI2RkP8VKHG4STGEHvGkM",
  authDomain: "innate-gizmo-412504.firebaseapp.com",
  projectId: "innate-gizmo-412504",
  storageBucket: "innate-gizmo-412504.appspot.com",
  messagingSenderId: "823198134064",
  appId: "1:823198134064:web:f68f54cb84a33f1bd822f5",
  measurementId: "G-SPGTM96VZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);
const analytics = getAnalytics(app);
export {DB}