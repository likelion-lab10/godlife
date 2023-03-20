import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrow } from 'assets/backArrow.svg';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button className='absolute left-7 top-20' onClick={() => navigate(-1)}>
      <BackArrow />
    </button>
  )
}

export default BackButton;
