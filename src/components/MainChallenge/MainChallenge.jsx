import { useNavigate } from "react-router-dom";
import { ReactComponent as Challenge } from 'assets/challenge.svg';

function MainChallenge() {
  const navigate = useNavigate();
  return (
    <button className='mb-[44px] mx-[28px]' onClick={() => navigate('/recruit')}>
      <Challenge/>
    </button>
  )
}

export default MainChallenge;