import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDhKr4_yy8tG_C8gSx-LpWl2fKjHzFq30Y",
  authDomain: "godlife2-63573.firebaseapp.com",
  projectId: "godlife2-63573",
  storageBucket: "godlife2-63573.appspot.com",
  messagingSenderId: "550938668999",
  appId: "1:550938668999:web:64eb38c227f95912ab73e2"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage}; 