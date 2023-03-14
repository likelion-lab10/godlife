import ImgInput from './ImgInput';
import Introduce from './Introduce';
import InputTitle from './InputTitle';
import BackButton from './BackButton';
import Container from './Container';
import SubmitButton from './SubmitButton';
function Upload(){
  return (
    <Container>
      <BackButton/>
      <InputTitle />
      <Introduce />
      <ImgInput />
      <SubmitButton />
    </Container>
  ) 
}

export default Upload