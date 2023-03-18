import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import runningImage from '../assets/running.jpg';
import readingImage from '../assets/reading.jpg';
import wakeupImage from '../assets/wakeup.jpg';
import drinkingImage from '../assets/drinking.jpg';

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
            className={`bg-white ${boxShadow} rounded-2xl overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="h-full w-full object-cover rounded-xl"
              src={challenge.imageUrl}
              alt={challenge.title}
            />
            <div className="p-4 -ml-2 rounded-2xl h-10">
              <h2 className="font-medium text-sm text-center -mt-1">{challenge.title}</h2>
            </div>
          </div>
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default ChallengeCard; 