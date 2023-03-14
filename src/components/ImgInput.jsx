import { useRef } from 'react';

function ImgInput(){
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <div>사진등록</div>
      <button onClick={onCickImageUpload}>이미지업로드</button>
      <div>내용</div>
      <input type='textarea' placeholder='내용을 입력해 주세요' />
    </>
  )
}

export default ImgInput