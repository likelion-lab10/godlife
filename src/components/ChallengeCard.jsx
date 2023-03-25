import React from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';


// 마우스 오버 이벤트
const ChallengeCard = ({ challenge }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered ? 'shadow-md' : 'shadow-lg';

  React.useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images');
    const getStorageData = async () => {
      const storageList = await listAll(storageRef);
      const urls = await Promise.all(
        storageList.items.map((item) => item.getDownloadURL())
      );
      setImageUrl(urls[0] || '');
    };
    getStorageData();
  }, []);

  return (
    <div className="w-full w-1/2 mb-4">
      <Link to={`/challenge/${challenge.id}`}>
        <div
          className={`bg-background ${boxShadow} rounded-2xl overflow-hidden`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 w-80 object-cover rounded-t-2xl"
              src={imageUrl}
              alt={challenge.title}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="px-1 py-2">
            <h2 className="font-medium text-sm text-center">{challenge.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChallengeCard;