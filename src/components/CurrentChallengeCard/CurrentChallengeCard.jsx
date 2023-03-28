import { Img, CurrentChallengeTitle } from 'components';

function CurrentChallengeCard(props) {
  return (
      <div className='flex flex-col mb-[27px]'>
        <Img src={props.src} alt={props.alt} width={150} height={146} />
        <CurrentChallengeTitle label ={props.label}/>
      </div>
  );
}

export default CurrentChallengeCard;
