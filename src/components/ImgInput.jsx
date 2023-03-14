import { useRef } from 'react';
import SubmitButton from './SubmitButton';

function ImgInput(){
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <form name='recruitment'>
        <div className='text-[15px] text-[#8A8A8A] mt-[26px]'>사진등록</div>
        <button className='bg-[#EAEAEA] w-[137px] h-[124px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px] cursor-pointer' onClick={onCickImageUpload}></button>
        <div className='mt-[47px] mb-[10px] text-[#8A8A8A]'>내용</div>
        <textarea className='bg-[#EAEAEA] w-[329px] h-[208px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-text placeholder:indent-2.5 leading-10' placeholder='내용을 입력해 주세요'></textarea>
        <SubmitButton />
      </form>
    </>
  )
}

export default ImgInput