import React from 'react';
import FilterButton from './FilterButton';

const ChallengeFilter = ({ filters, selectedFilter, setSelectedFilter }) => {
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };


  return (
    <div className="flex flex-wrap items-center justify-center w-full py-6 space-x-4">
      {filters.map((filter, index) => (
        <FilterButton
        key={index}
        filter={filter}
        selected={selectedFilter === filter}
        handleFilterClick={handleFilterClick}
      />
      ))}
    </div>
  );
};

export default ChallengeFilter;