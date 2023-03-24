
import { useState } from 'react';
import CategoriesButton from './CategoriesButton';

const CategoryButton = ({...restProps}) => {
  const {handleFilterClick} = restProps
  const filters = ["생활습관", "식습관", "취미", "환경"];
  const [selectedFilter, setSelectedFilter] = useState("");
  
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    handleFilterClick(filter);
  };


  return (
    <div className="flex gap-1">
      {filters.map((filter) => (
        <CategoriesButton 
          key={filter}
          filter={filter}
          selected={filter === selectedFilter}
          handleFilterClick={handleFilter}
        />
      ))}
    </div>
  );
};

export default CategoryButton;