import React, { useState, useEffect, useCallback } from 'react';
import ChallengeFilter from '../components/ChallengeFilter';
import ChallengeList from '../components/ChallengeList';
import ChallengeCard from '../components/ChallengeCard';
import exampleData from '../data/exampleData';

// 상태값 관리
function Category() {
  const [challenges, setChallenges] = useState(exampleData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredChallenges, setFilteredChallenges] = useState([]);

  const filters = ['생활습관', '식습관', '취미', '환경'];

  // 콜백함수 사용 -> updateFilteredChallenges 함수 최적화
  const updateFilteredChallenges = useCallback(() => {
    const filteredChallenges = selectedFilter === ''
      ? challenges
      : challenges.filter(challenge => challenge.category === selectedFilter);
    setFilteredChallenges(filteredChallenges);
  }, [challenges, selectedFilter]);

  // 필터링 된 도전과제 목록 업데이트
  useEffect(() => {
    updateFilteredChallenges();
  }, [updateFilteredChallenges]);
  
  useEffect(() => {
    updateFilteredChallenges();
  }, [selectedFilter, updateFilteredChallenges]);
  
  return (
    <div className="min-h-screen px-6 py-20 bg-background">
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
    </div>
  );
}

export default Category;