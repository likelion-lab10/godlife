import { dbService } from 'fbase';
import { v4 as uuid4 } from "uuid";
import { useRef, useState } from 'react';
import { storageService } from '../fbase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import ChallengeSubmitButton from './SubmitButton/ChallengeSubmitButton';
import FileInput from './TextInput/FileInput';

function ImgInput(){
  const [challenge, setChallenge] = useState("");
  const [attachment, setAttatchment] = useState("");
  const fileInput = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = '';
    if(attachment !== ""){
      const attachmentRef = ref(storageService, `${uuid4()}`);
      const response = await uploadBytes(attachmentRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref)
    } 
    const challengObj = {
      challenge,
      createdAt: Date.now(),
      attachmentUrl
    }
    await addDoc(collection(dbService, "challenges"),challengObj);
    setChallenge('');
    setAttatchment("");
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
        <FileInput onChange={onFileChange} ref={fileInput}>
          {attachment && <img className='-indent-[9999px] block m-auto w-full h-full' src={attachment} alt="이미지"/>}
        </FileInput>
        <div className='mt-[47px] mb-[10px] text-gray'>내용</div>
        <textarea className='bg-[#EAEAEA] w-[329px] h-[208px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-text placeholder:indent-2.5 leading-10' value={challenge} onChange={onChange} placeholder='내용을 입력해 주세요' ref={fileInput}></textarea>
        <ChallengeSubmitButton type='submit' onClick={onClearAttachment} >완료</ChallengeSubmitButton>
      </form>
    </>
  )
}

export default ImgInput