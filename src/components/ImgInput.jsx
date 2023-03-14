import { useRef } from 'react';

function ImgInput(){
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <div className='text-[15px] text-[#8A8A8A] mt-[45px]'>사진등록</div>
      <button className='bg-[#EAEAEA] w-[137px] h-[124px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px]' onClick={onCickImageUpload}></button>
      <div className='mt-[47px]'>내용</div>
      <input className='bg-[#EAEAEA] w-[329px] h-[208px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' type='textarea' placeholder='내용을 입력해 주세요' />
    </>
  )
}

export default ImgInput