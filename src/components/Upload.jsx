import ImgInput from './ImgInput';
import Introduce from './Introduce';
import InputTitle from './InputTitle';
import BackButton from './BackButton';
import Container from './Container';
function Upload(){
  return (
    <Container>
      <BackButton/>
      <InputTitle />
      <Introduce />
      <ImgInput />
    </Container>
  ) 
}

export default Upload