import ImgInput from './ImgInput';
import Introduce from './Introduce';
import Container from './Container';
import BackButton from './BackButton/BackButton';
import PageTitle from './PageTitle/PageTitle';
function Upload(){
  return (
    <Container>
      <BackButton />
      <PageTitle children='모집' />
      <Introduce />
      <ImgInput />
    </Container>
  ) 
}

export default Upload