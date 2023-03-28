import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeSearch } from 'assets/homeSearch.svg';

function SearchHome() {
  const navigate = useNavigate();
  return (
    <button className='absolute right-[61px] top-[83px]' onClick={() => navigate('/recruit')}>
      <HomeSearch />
    </button>
  )
}

export default SearchHome;