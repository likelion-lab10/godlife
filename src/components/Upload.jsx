import goBack from '../assets/go-back.svg'
import ImgInput from './ImgInput';
import Introduce from './Introduce';
function Upload(){
  return (
    <div>
      <img src={goBack} alt='뒤로가기 이미지' />
      <Introduce />
      <ImgInput />
    </div>
  ) 
}

export default Upload