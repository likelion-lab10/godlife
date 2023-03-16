import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCard = ({ challenge }) => {
  return (
    <Link to={`/challenge/${challenge.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="h-56 w-full object-cover"
          src={challenge.imageUrl}
          alt={challenge.title}
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{challenge.title}</h2>
          <p className="text-gray-700 text-base">{challenge.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChallengeCard;