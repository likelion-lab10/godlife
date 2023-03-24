import { CurrentChallengeCard } from 'components';
import { collection, getDocs } from 'firebase/firestore';
import { dbService as db } from 'fbase';
import { useState, useEffect } from 'react';


function CurrentChallengeContainer() {
  const itemsCollectionRef = collection(db, 'challenges');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(itemsCollectionRef);
        const itemsData = querySnapshot.docs.map((doc) => doc.data());
        setItems(itemsData);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-[390px] bg-background px-[28px] flex flex-wrap justify-between'>
      {items.length > 0 ? (
        items.map((list) => {
          return (
            <CurrentChallengeCard
              src={list.attachmentUrl}
              alt={list.challenge}
              label={list.challenge}
            />
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default CurrentChallengeContainer;
