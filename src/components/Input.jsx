import { dbService } from 'fbase';
import Tag from './Tag';
import { v4 as uuid4 } from "uuid";
import { useRef, useState } from 'react';
import { storageService } from '../fbase';
import FileInput from './fileinput/FileInput';
import CategoryButton from './CategoryButton';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import ChallengeSubmitButton from './challenge/ChallengeSubmitButton';

function Input(){
  const [challenge, setChallenge] = useState("");
  const [attachment, setAttatchment] = useState("");
  const [inputHashTag, setInputHashTag] = useState('');
  const [hashTags, setHashTags] = useState([]);
  const [filter, setFilter] = useState('');
  const fileInput = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = '';
    const displayCreateAt = (createdAt) => {
      const date = new Date(createdAt);
      const now = Date.now();
      const milliSeconds = now - date;
  
      const seconds = milliSeconds / 1000;
      const minutes = seconds / 60;
      const hours = minutes / 60;
      const days = hours / 24;
      const months = days / 30;
      const years = months / 12;
  
      if (seconds < 60) {
        return "방금 전";
      } else if (minutes < 60) {
        return `${Math.floor(minutes)}분 전`;
      } else if (hours < 24) {
        return `${Math.floor(hours)}시간 전`;
      } else if (days < 30) {
        return `${Math.floor(days)}일 전`;
      } else if (months < 12) {
        return `${Math.floor(months)}달 전`;
      } else {
        return `${Math.floor(years)}년 전`;
      }
    };
    if(attachment !== ""){
      const attachmentRef = ref(storageService, `${uuid4()}`);
      const response = await uploadString(attachmentRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref)
    } 
    const challengObj = {
      challenge,
      createdAt: displayCreateAt(Date.now()),
      attachmentUrl,
      hashTags,
      category : filter
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
  const handleFilterClick = (filter) => {
    setFilter(filter)
    console.log(filter)
  };

  return (
    <>
      <CategoryButton filter={filter} handleFilterClick={handleFilterClick} />
      <form name='recruitment' onSubmit={onSubmit}>
        <div className='text-h3 text-gray mt-[26px]'>사진등록</div>
        <FileInput onChange={onFileChange} ref={fileInput}>
          {attachment && <img className='-indent-[9999px] block m-auto w-full h-full object-cover' src={attachment} alt="이미지"/>}
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