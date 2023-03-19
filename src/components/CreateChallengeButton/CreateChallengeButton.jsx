import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from 'assets/plus.svg';

export default function CreateChallengeButton() {
  const navigate = useNavigate();
  return (
    <button className='absolute right-7 top-20' onClick={() => navigate('/recruit')}>
      <Plus />
    </button>
  )
}
