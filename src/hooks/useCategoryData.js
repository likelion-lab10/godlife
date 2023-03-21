// 카테고리 배열 반환 훅
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

export default function useCategoryData() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Firestore에서 challenges 컬렉션을 가져오기
    const getCategoryData = async () => {
      try {
        const querySnapshot = await db.collection('challenges').get();
        // 카테고리 배열을 생성
        const categories = querySnapshot.docs
          .map((doc) => doc.data().category)
          .filter((category, index, self) => self.indexOf(category) === index);
        // 카테고리 배열을 상태로 설정
        setCategories(categories);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };
    getCategoryData();
  }, []);

  return categories;
}
