import { useState } from 'react';

export default function useSelectedCategory(initialCategory) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return [selectedCategory, handleCategoryClick];
}
