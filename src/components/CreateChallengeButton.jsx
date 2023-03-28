import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from '../assets/plus.svg';

function CreateChallengeButton() {
  const navigate = useNavigate();
  return (
    <button className='absolute right-7 top-5' onClick={() => navigate('/recruit')}>
      <Plus />
    </button>
  )
}

export default CreateChallengeButton;