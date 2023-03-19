import ChallengeCard from './ChallengeCard';
// import ChallengeCardGrid from '../components/ChallengeCardGrid';
import exampleData from '../data/exampleData';

const ChallengeList = ({ challenges }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-1 gap-x-3 mb-8">
      {challenges.map((challenge) => (
        <div className="w-80 md:w-1/3 lg:w-1/4 p-2" key={challenge.id}>
          <ChallengeCard challenge={challenge} />
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;