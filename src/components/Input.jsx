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
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

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
    if(attachment !== ""){
      const attachmentRef = ref(storageService, `${uuid4()}`);
      const response = await uploadString(attachmentRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref)
    } 
    const challengObj = {
      challenge,
      createdAt: Date.now(),
      attachmentUrl,
      hashTags,
      category : filter
    }
    await addDoc(collection(dbService, "challenges"),challengObj);
    setChallenge('');
    setAttatchment("");
    setHashTags([]);

    await toast.promise(
      fetch("http://localhost:3000/recruit"),
      {
        success: '모집글 작성이 완료되었습니다.',
        error: '죄송합니다. 다시 작성해주세요.'
      }
  );
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
        <ToastContainer 
        limit={1}
        autoClose={3000}
        hideProgressBar
        />
      </form>
    </>
  )
}

export default Input