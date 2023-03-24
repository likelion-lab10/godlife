import { CurrentChallengeCard } from 'components';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from 'fbase';


const docRef = doc(db, 'challenges2', '1')

const docSnap = await getDoc(docRef);
try {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
} catch (error) {
  console.log("Error getting document:", error);
}



function CurrentChallengeContainer() {
  return (
    <div className='w-[390px] bg-background px-[28px]'>
      <CurrentChallengeCard/>
    </div>
  );
}

export default CurrentChallengeContainer;
