import { useRef, useState } from 'react';
import SubmitButton from './SubmitButton';
import defaultImage from '../assets/plus.svg'

function ImgInput(){
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
      };
  };

  const onErrorImg = (e) => {
    e.target.src = defaultImage
  }
  

  return (
    <>
      <form name='recruitment'>
        <div className='text-h3 text-gray mt-[26px]'>사진등록</div>
        <label htmlFor="profileImg" className='block bg-[#EAEAEA] w-[137px] h-[124px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px] cursor-pointer'>
        <img className='-indent-[9999px] block m-auto pt-[20px] w-[120px] h-[110px]' src={imgFile ? imgFile :`../assets/plus.svg`} onError={onErrorImg} alt="이미지"/>
        </label>
        <input type="file" style={{ display: "none" }} accept="image/*" id="profileImg" onChange={saveImgFile} ref={imgRef} />
        <div className='mt-[47px] mb-[10px] text-gray'>내용</div>
        <textarea className='bg-[#EAEAEA] w-[329px] h-[208px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-text placeholder:indent-2.5 leading-10' placeholder='내용을 입력해 주세요'></textarea>
        <SubmitButton />
      </form>
    </>
  )
}

export default ImgInput