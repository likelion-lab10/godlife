import React from 'react';
import ChallengeCard from './ChallengeCard';

function ChallengeList(props) {
  const { challenges } = props;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mb-8">
      {challenges && challenges.map(challenge => (
        <div className="w-80 p-2" key={challenge.id}>
          <ChallengeCard challenge={challenge} />
        </div>
      ))}
    </div>
  );
}

export default ChallengeList;