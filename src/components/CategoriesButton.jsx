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
      className={`px-1 py-2 text-xs font-medium leading-4 rounded-full border ${
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

export default CategoriesButton