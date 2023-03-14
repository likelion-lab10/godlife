import goBack from '../assets/go-back.svg'
import ImgInput from './ImgInput';
import Introduce from './Introduce';
import InputTitle from './InputTitle';
function Upload(){
  return (
    <div>
      <InputTitle />
      <img src={goBack} alt='뒤로가기 이미지' />
      <Introduce />
      <ImgInput />
    </div>
  ) 
}

export default Upload