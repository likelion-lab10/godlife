import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_MESSAGE_SENDER_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyC9QYJ9rSUvdoyoFXvjz7h9SPsofZlZ9t8",
  authDomain: "godlife-2fbf9.firebaseapp.com",
  projectId: "godlife-2fbf9",
  storageBucket: "godlife-2fbf9.appspot.com",
  messagingSenderId: "717934382724",
  appId: "1:717934382724:web:f1a9454bf831fcaa56bcd1"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage}; 