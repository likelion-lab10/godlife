import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const {
//   REACT_APP_API_KEY,
//   REACT_APP_AUTH_DOMAIN,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_MESSAGE_SENDER_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_APP_ID,
// } = process.env;

// const firebaseConfig = {
//   apiKey: REACT_APP_API_KEY,
//   authDomain: REACT_APP_AUTH_DOMAIN,
//   projectId: REACT_APP_PROJECT_ID,
//   storageBucket: REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
//   appId: REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCByWwf9Vi4WEzosFTOFYflDvcPUbPN3qw",
  authDomain: "test2-172a6.firebaseapp.com",
  projectId: "test2-172a6",
  storageBucket: "test2-172a6.appspot.com",
  messagingSenderId: "1045566994261",
  appId: "1:1045566994261:web:b51718b913bb76c04fa1dc"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage}; 