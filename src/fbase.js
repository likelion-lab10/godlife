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
  apiKey: "AIzaSyAwdtVK3P5fIZCd-ZvKlYS_H9oQyLPZjlg",
  authDomain: "test6-59dbb.firebaseapp.com",
  projectId: "test6-59dbb",
  storageBucket: "test6-59dbb.appspot.com",
  messagingSenderId: "138389934575",
  appId: "1:138389934575:web:8b73fcc9bcb103fc6a661a"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage}; 