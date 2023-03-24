import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyC9QYJ9rSUvdoyoFXvjz7h9SPsofZlZ9t8",
  authDomain: "godlife-2fbf9.firebaseapp.com",
  projectId: "godlife-2fbf9",
  storageBucket: "godlife-2fbf9.appspot.com",
  messagingSenderId: "717934382724",
  appId: "1:717934382724:web:f1a9454bf831fcaa56bcd1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const firestoreSettings = { timestampsInSnapshots: 'legacy' };
firestore.settings(firestoreSettings);

const storage = firebase.storage();

export async function getStorageData() {
  const storageRef = storage.ref().child('path/to/data');
  const listRef = await storageRef.listAll();
  const items = await listRef.items();
  const urls = await Promise.all(
    items.map(async (itemRef) => {
      const url = await itemRef.getDownloadURL();
      return url;
    })
  );
  return urls;
}

export async function getChallengeData() {
  const snapshot = await firestore.collection('challenges').get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function getIntegratedData() {
  const storageData = await getStorageData();
  const challengeData = await getChallengeData();

  const storageDataObj = storageData.reduce((acc, url) => {
    const imageUrl = url.split("?")[0];
    return { ...acc, [imageUrl]: url };
  }, {});

  const integratedData = challengeData.map((challenge) => {
    const imageUrl = storageDataObj[challenge.imageUrl.split("?")[0]];
    return { ...challenge, imageUrl };
  });

  return integratedData;
}

export { firestore, storage };