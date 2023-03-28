
const FilterButton = ({ filter, selected, handleFilterClick, icon }) => {
   return (
    <button
      className={`px-1 py-2 text-xs font-medium leading-4 rounded-full ${
        selected ? "text-white bg-primary" : "text-gray-700 bg-white"
      }`}
      onClick={() => handleFilterClick(filter)}
    >
      <div className="flex items-center">
        {icon && <img src={icon} alt="icon" className="w-4 h-4 mr-2" />}
        <div>{filter}</div>
      </div>
    </button>
  );
};

export default FilterButton;
