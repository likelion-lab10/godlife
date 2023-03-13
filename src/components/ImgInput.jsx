import { useRef } from 'react';

function ImgInput(){
  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <button onClick={onCickImageUpload}>이미지업로드</button>
    </>
  )
}

export default ImgInput