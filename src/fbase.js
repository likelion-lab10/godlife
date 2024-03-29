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
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const storageService = getStorage(app);