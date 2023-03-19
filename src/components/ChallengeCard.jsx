import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import runningImage from '../assets/running.jpg';
import readingImage from '../assets/reading.jpg';
import wakeupImage from '../assets/wakeup.jpg';
import drinkingImage from '../assets/drinking.jpg';
import ploggingImage from '../assets/plogging.jpg';
import zerowasteImage from '../assets/zerowaste.jpg';
import beachcombingImage from '../assets/beachcombing.jpg';

const ChallengeCard = ({ challenge }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered ? 'shadow-md' : 'shadow-lg';

  return (
    <div className="w-1/2 mb-4">
      <BrowserRouter>
        <Link to={`/challenge/${challenge.id}`}>
          <div
            className={`bg-background ${boxShadow} rounded-2xl overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="h-40 overflow-hidden">
              <img
                className="h-40 w-full object-cover rounded-t-2xl"
                src={challenge.imageUrl}
                alt={challenge.title}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="font-medium text-sm text-center">{challenge.title}</h2>
            </div>
          </div>
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default ChallengeCard;