import React, { useState, useEffect, useCallback } from 'react';
import ChallengeFilter from './ChallengeFilter';
import ChallengeList from './ChallengeList';
import ChallengeCard from './ChallengeCard';
import { firestore as db, getStorageData } from '../fbase';

// 상태값 관리
function Category() {
  const [challenges, setChallenges] = useState();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredChallenges, setFilteredChallenges] = useState([]);

  const filters = ['생활습관', '식습관', '취미', '환경'];

  // 콜백함수 사용 -> updateFilteredChallenges 함수 최적화
  const updateFilteredChallenges = useCallback(async () => {
  const urls = await getStorageData();
  const filteredChallenges = [];

  // Firebase에서 데이터 가져오기
  const snapshot = await db.collection('challenges').get();
  snapshot.forEach((doc) => {
    const data = doc.data();
    // imageUrl 프로퍼티를 랜덤 URL로 설정
    data.imageUrl = urls[Math.floor(Math.random() * urls.length)];
    filteredChallenges.push(data);
  });

  setFilteredChallenges(selectedFilter === ''
    ? filteredChallenges
    : filteredChallenges.filter(challenge => challenge.category === selectedFilter));

  setChallenges(filteredChallenges);
  setFilteredChallenges(filteredChallenges);
}, [selectedFilter]);
  // 필터링 된 도전과제 목록 업데이트
  useEffect(() => {
    updateFilteredChallenges();
  }, [updateFilteredChallenges]);
  
  useEffect(() => {
    updateFilteredChallenges();
  }, [selectedFilter, updateFilteredChallenges]);
  
  return (
    <section className="min-h-screen px-6 py-20 bg-background">
      <h3 className="px-2 text-h2 font-medium leading-tight text-left text-black">
        카테고리
      </h3>
      <div className="py-1">
        {/* filters, selectedFilter, setSelectedFilter prop 전달 */}
        <ChallengeFilter
          filters={filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={(filter) => {
            setSelectedFilter(filter);
            updateFilteredChallenges();
          }}
        />
        {/* challenges prop 전달 */}
        <h3 className="px-2 py-4 text-h2 font-medium leading-tight text-left text-black">
          {selectedFilter === '' ? '전체' : selectedFilter}
        </h3>
          {/* 도전과제 목록을 필터링하여 filteredChallenges 상태값에 업데이트 */}
        <ChallengeList challenges={filteredChallenges} />
      </div>
    </section>
  );
}

export default Category;