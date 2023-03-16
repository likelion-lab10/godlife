import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

export default function useCategoryData() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 파이어베이스에서 카테고리 정보 가져오기
    db.collection('challenges')
      .get()
      .then((querySnapshot) => {
        const categories = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (!categories.includes(data.category)) {
            categories.push(data.category);
          }
        });
        setCategories(categories);
      });
  }, []);

  return categories;
}