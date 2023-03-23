
import CategoriesButton from './CategoriesButton';

const CategoryButton = ({...restProps}) => {
  const {handleFilterClick} = restProps
  const filters = ["생활습관", "식습관", "취미", "환경"];

  // const handleFilterClick = (filter) => {
  //   handlerFilter(filter)
  // };

  return (
    <div className="flex gap-1">
      {filters.map((filter) => (
        <CategoriesButton 
          key={filter}
          filter={filter}
          selected={false}
          handleFilterClick={handleFilterClick}
        />
      ))}
    </div>
  );
};

export default CategoryButton;