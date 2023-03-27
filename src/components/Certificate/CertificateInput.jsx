import CertificateFileInput from './CertificateFileInput';
import { useState, useRef } from 'react';
import { dbService } from 'fbase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString } from '@firebase/storage';
import { getDownloadURL } from '@firebase/storage';
import { v4 as uuid4 } from "uuid";
import { storageService } from '../../fbase';
import CertificateSubmitButton from './CertificateSubmitButton';

function CertificateInput () {
  const [attachment, setAttatchment] = useState("");
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
      createdAt: Date.now(),
      attachmentUrl,
    }
    await addDoc(collection(dbService, "certificates"),challengObj);
    setAttatchment("");
  }


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
  return(
    <form name='recruitment' onSubmit={onSubmit}>
      <div className='text-h3 text-gray mt-[26px]'>사진등록</div>
      <CertificateFileInput onChange={onFileChange} ref={fileInput}>
        {attachment && <img className='-indent-[9999px] block m-auto w-full h-full object-cover' src={attachment} alt="이미지"/>}  
      </CertificateFileInput>  
      <CertificateSubmitButton type="submit">인증하기</CertificateSubmitButton>
    </form>
  )
}

export default CertificateInput
