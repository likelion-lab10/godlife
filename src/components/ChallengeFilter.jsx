import React from 'react';
import FilterButton from './FilterButton';
import calendarIcon from '../assets/calendar.svg';
import foodIcon from '../assets/food.svg';
import habitIcon from '../assets/habbit.svg';
import environmentIcon from '../assets/environment.svg';


const iconPaths = {
  생활습관: calendarIcon,
  식습관: foodIcon,
  취미: habitIcon,
  환경: environmentIcon,
};

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
        icon={iconPaths[filter]}      
      />
      ))}
    </div>
  );
};

export default ChallengeFilter;