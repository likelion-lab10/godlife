import React from 'react';

const FilterButton = ({ filter, selected, handleFilterClick }) => {
  return (
    <button
      className={`px-4 py-2 text-xs font-medium leading-4 rounded-full ${
        selected ? 'text-white bg-primary' : 'text-gray-700 bg-white'
      }`}
      onClick={() => handleFilterClick(filter)}
    >
      {filter}
    </button>
  );
};

export default FilterButton;
