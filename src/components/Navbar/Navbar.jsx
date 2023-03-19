import { ReactComponent as CommunityIcon } from 'assets/communityIcon.svg';
import { ReactComponent as MainIcon } from 'assets/mainIcon.svg';
import { ReactComponent as ParticipateIcon } from 'assets/participateIcon.svg';
import { ReactComponent as ProfileIcon } from 'assets/profileIcon.svg';
import { useNavigate } from 'react-router-dom';

const link = [
  { icon: <MainIcon />, link: '/main', key: 'main' },
  { icon: <CommunityIcon />, link: '/community', key: 'community' },
  { icon: <ParticipateIcon />, link: '/participate', key: 'participate' },
  { icon: <ProfileIcon />, link: '/profile', key: 'profile' },
];

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='h-screen flex justify-center items-end'>
      <ul className='h-[68px] w-[390px] flex justify-around items-center space-around border-t'>
        {
          link.map((list) => {
            return <li className='cursor-pointer' key={list.key} onClick={() => navigate(list.link)}>{list.icon}</li>
          })
        }
      </ul>
    </div>
  )
}
