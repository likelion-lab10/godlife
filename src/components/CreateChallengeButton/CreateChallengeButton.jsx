import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from 'assets/plus.svg';

export default function CreateChallengeButton() {
  const navigate = useNavigate();
  return (
    <button className='p-1 w-8 h-8 rounded-full' onClick={() => navigate('/recruit')}>
      <Plus />
    </button>
  )
}
