import calendarIcon from '../assets/calendar.svg';
import foodIcon from '../assets/food.svg';
import habitIcon from '../assets/habbit.svg';
import environmentIcon from '../assets/environment.svg';

const CategoriesButton = ({ filter, selected, handleFilterClick }) => {
  const iconPaths = {
    생활습관: calendarIcon,
    식습관: foodIcon,   
    취미: habitIcon,
    환경: environmentIcon,
  };

  return (
    <button
      className={`px-1 py-2 text-xs font-medium leading-4 rounded-full ${
        selected ? "text-white bg-primary" : "text-gray-700 bg-white"
      }`}
      onClick={() => {
        handleFilterClick(filter);
      }}
    >
      <div className="flex items-center">
        {iconPaths[filter] && (
          <img src={iconPaths[filter]} alt="icon" className="w-4 h-4 mr-2" />
        )}
        <div>{filter}</div>
      </div>
    </button>
  );
};

const CategoryButton = () => {
  const filters = ["생활습관", "식습관", "취미", "환경"];

  const handleFilterClick = (filter) => {
  };

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