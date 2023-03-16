import React from 'react';
import ChallengeCard from '../components/ChallengeCard';

const ChallengeList = ({ challenges }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;