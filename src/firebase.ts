import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5qZLvN2gPH7I4LNjkvZ1bv1dVGdZAutQ",
  authDomain: "nwitter-reloaded-d3b4c.firebaseapp.com",
  projectId: "nwitter-reloaded-d3b4c",
  storageBucket: "nwitter-reloaded-d3b4c.firebasestorage.app",
  messagingSenderId: "276112101783",
  appId: "1:276112101783:web:13480a0e26cfd74dd974d2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);