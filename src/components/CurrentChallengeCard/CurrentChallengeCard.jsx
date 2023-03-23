import { Img, CurrentChallengeTitle } from 'components';
import profileIcon from '../../assets/profileIcon.svg';

function CurrentChallengeCard() {
  return (
    <div className='flex flex-wrap justify-between'>
      <div className='flex flex-col mb-[27px]'>
        <Img src={profileIcon} alt={'하이'} width={150} height={146} />
        <CurrentChallengeTitle>안녕</CurrentChallengeTitle>
      </div>
    </div>
  );
}

export default CurrentChallengeCard;
