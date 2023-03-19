import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrow } from 'assets/backArrow.svg';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button className='p-1 w-8 h-8 rounded-full' onClick={() => navigate(-1)}>
      <BackArrow />
    </button>
  )
}
