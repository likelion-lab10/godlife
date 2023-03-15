import { useRef, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { dbService } from 'fbase';

function ImgInput(){
  const [challenge, setChallenge] = useState('');
  const [attatchment, setAttatchment] = useState("");
  const fileInput = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "challenges"),{
      challenge,
      createdAt: Date.now(),
    });
    setChallenge('');
  }
  const onChange = (e) => {
    const {
      target: { value },
    } = e
    setChallenge(value)
  };
  
  const onFileChange = (e) => {
    const {
      target : { files },
    } = e;
    const theFile = files[0]
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const{
        currentTarget: {result}
      } = finishedEvent
      setAttatchment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttatchment(null);
    fileInput.current.value = null;
  };

  return (
    <>
      <form name='recruitment' onSubmit={onSubmit}>
        <div className='text-h3 text-gray mt-[26px]'>사진등록</div>
        <label htmlFor="profileImg" className='block bg-[#EAEAEA] w-[137px] h-[124px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px] cursor-pointer'>
        {attatchment && <img className='-indent-[9999px] block m-auto pt-[20px] w-[120px] h-[110px]' src={attatchment} alt="이미지"/>}
        </label>
        <input type="file" style={{ display: "none" }} accept="image/*" id="profileImg" onChange={onFileChange} ref={fileInput} />
        <div className='mt-[47px] mb-[10px] text-gray'>내용</div>
        <textarea className='bg-[#EAEAEA] w-[329px] h-[208px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-text placeholder:indent-2.5 leading-10' value={challenge} onChange={onChange} placeholder='내용을 입력해 주세요' ref={fileInput}></textarea>
        <input className='block text-center bg-[#EAEAEA] w-[334px] h-[52px] mt-[63px] rounded-[100px] cursor-pointer placeholder:text-bigButton text-gray' type='submit' placeholder='완료' onClick={onClearAttachment} />
      </form>
    </>
  )
}

export default ImgInput