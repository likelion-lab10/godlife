import { ReactComponent as CommunityIcon } from '../assets/navicon/communityIcon.svg';
import { ReactComponent as MainIcon } from '../assets/navicon/mainIcon.svg';
import { ReactComponent as ParticipateIcon } from '../assets/navicon/participateIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/navicon/profileIcon.svg';
import { useNavigate } from 'react-router-dom';

const link = [
  { icon: <MainIcon />, link: '/main', key: 'main' },
  { icon: <CommunityIcon />, link: '/community', key: 'community' },
  { icon: <ParticipateIcon />, link: '/participate', key: 'participate' },
  { icon: <ProfileIcon />, link: '/profile', key: 'profile' },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='fixed bg-background bottom-0 left-1/2 transform -translate-x-1/2'>
      <ul className='h-[68px] w-[390px] md:w-[720px] lg:w-[1080px] xl:w-[1920px] flex justify-around items-center border-t'>
        {link.map((list) => (
          <li className='cursor-pointer' key={list.key} onClick={() => navigate(list.link)}>
            {list.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
