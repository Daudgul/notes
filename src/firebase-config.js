import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKQVJ6TdIigyRwrhDNsrW67-RyBX4Ek6U",
  authDomain: "notekeeper-924eb.firebaseapp.com",
  projectId: "notekeeper-924eb",
  storageBucket: "notekeeper-924eb.appspot.com",
  messagingSenderId: "807709764191",
  appId: "1:807709764191:web:227ec20adc69da4d8409ea",
  measurementId: "G-M26K2QGMEZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
