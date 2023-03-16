import React, { useState, useEffect } from 'react';
import ChallengeFilter from '../components/ChallengeFilter';
import ChallengeList from '../components/ChallengeList';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const db = firebase.firestore();

function Category() {
  const [challenges, setChallenges] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['생활습관', '식습관', '취미', '환경'];

  const filteredChallenges =
    selectedFilter === 'All'
    ? challenges 
    : challenges.filter((challenge) => challenge.category === selectedFilter);

  return (
    <div className="w-full px-6 py-20 bg-background">
     <h3 className="px-2 text-h2 font-bold leading-tight text-left text-black">
      카테고리
     </h3>

      <ChallengeFilter
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <ChallengeList challenges={filteredChallenges} />
    </div>
  );
};

export default Category;