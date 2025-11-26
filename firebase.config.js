import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2PpiURKIAAIWsAbYy37IoMBWI9uMQqdk",
  authDomain: "vistapulse-cf4df.firebaseapp.com",
  projectId: "vistapulse-cf4df",
  storageBucket: "vistapulse-cf4df.firebasestorage.app",
  messagingSenderId: "257781195636",
  appId: "1:257781195636:web:98b84e2788a62e05080221",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
