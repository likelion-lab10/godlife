import React, { useState, useEffect, useCallback } from 'react';
import ChallengeFilter from './ChallengeFilter';
import ChallengeList from './ChallengeList';
import ChallengeCard from './ChallengeCard';
import useCategoryData from '../hooks/useCategoryData';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


function Category() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const { categories, getStorageData } = useCategoryData();
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [urls, setUrls] = useState([]);

  const filters = categories;

  const updateFilteredChallenges = useCallback(async (urls) => {
    const filteredChallenges = [];
  
    const querySnapshot = await getDocs(collection(getFirestore(), 'challenges'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (urls && urls.length > 0) {
        data.imageUrl = urls[Math.floor(Math.random() * urls.length)];
      }
      filteredChallenges.push(data);
    });
  
    setFilteredChallenges(
      !selectedFilter || selectedFilter === ''
        ? filteredChallenges
        : filteredChallenges.filter(
            (challenge) => challenge.category === selectedFilter
          )
    );
  }, [selectedFilter]);

  useEffect(() => {
    updateFilteredChallenges(urls);
  }, [selectedFilter, urls, updateFilteredChallenges]);

  return (
    <section className="min-h-screen px-6 py-20 bg-background">
      <h3 className="px-2 text-h2 font-medium leading-tight text-left text-black">
        카테고리
      </h3>
      <div className="py-1">
        <ChallengeFilter
          filters={filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={(filter) => {
            setSelectedFilter(filter);
            updateFilteredChallenges(urls);
          }}
        />
        <h3 className="px-2 py-4 text-h2 font-medium leading-tight text-left text-black">
          {selectedFilter === '' ? '전체' : selectedFilter}
        </h3>
        <ChallengeList challenges={filteredChallenges} />
      </div>
    </section>
  );
}

export default Category;