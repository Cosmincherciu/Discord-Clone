import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyB4mNIz8QevcqUNEfIp2XZ7kl_zQGUD_Gc",
  authDomain: "discord-clone-34a99.firebaseapp.com",
  projectId: "discord-clone-34a99",
  storageBucket: "discord-clone-34a99.appspot.com",
  messagingSenderId: "671765823893",
  appId: "1:671765823893:web:ecae8031073b407d06b69c",
  measurementId: "G-31LJBCFE44",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const doc = getFirestore(app);
export default app;
