// 카테고리 배열 반환 훅
import { useState, useEffect } from 'react';
import { firestore } from '../fbase'; 
import { getStorage } from "firebase/storage"
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default function useCategoryData() {
  const [categories, setCategories] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const getStorageData = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images');
    const storageList = await listAll(storageRef);
    const urls = await Promise.all(
      storageList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );
    setImageUrls(urls);
  };

  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const querySnapshot = await firestore.collection('challenges').get(); 
        const categories = querySnapshot.docs
          .map((doc) => doc.data().category)
          .filter((category, index, self) => self.indexOf(category) === index);
        setCategories(categories);
      } catch (error) {

      }
    };

    getCategoryData();
    getStorageData();
  }, []);

  return { categories, getStorageData}; 
}