import { dbService } from 'fbase';
import { v4 as uuid4 } from "uuid";
import { useRef, useState } from 'react';
import { storageService } from '../fbase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import ChallengeSubmitButton from './SubmitButton/ChallengeSubmitButton';
import FileInput from './TextInput/FileInput';
import Tag from './Tag';

function Input(){
  const [challenge, setChallenge] = useState("");
  const [attachment, setAttatchment] = useState("");
  const [inputHashTag, setInputHashTag] = useState('');
  const [hashTags, setHashTags] = useState([]);
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
      attachmentUrl,
      hashTags
    }
    await addDoc(collection(dbService, "challenges"),challengObj);
    setChallenge('');
    setAttatchment("");
    setHashTags([]);
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
  const handleInputHashTag = (val) => {
    setInputHashTag(val);
  }
  const handleHashTags = (val) => {
    setHashTags(val);
  }

  return (
    <>
      <form name='recruitment' onSubmit={onSubmit}>
        <div className='text-h3 text-gray mt-[26px]'>사진등록</div>
        <FileInput onChange={onFileChange} ref={fileInput}>
          {attachment && <img className='-indent-[9999px] block m-auto w-full h-full' src={attachment} alt="이미지"/>}
        </FileInput>
        <div className='mt-[47px] mb-[10px] text-gray'>제목</div>
        <textarea className='bg-[#EAEAEA] w-[334px] h-[57px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-text resize-none indent-3.5 pt-[18px]' value={challenge} onChange={onChange} placeholder='내용을 입력해 주세요' maxLength='20' ref={fileInput}></textarea>
        <div className='mt-[47px] mb-[10px] text-gray'>태그</div>
        <Tag ref={fileInput} inputHashTag={inputHashTag} handleInputHashTag={handleInputHashTag} hashTags={hashTags} handleHashTags={handleHashTags}/>
        <ChallengeSubmitButton type='submit'>완료</ChallengeSubmitButton>
      </form>
    </>
  )
}

export default Input