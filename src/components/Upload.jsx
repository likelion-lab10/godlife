import Input from './Input';
import Introduce from './Introduce';
import Container from './Container';
import PageTitle from './PageTitle/PageTitle';
import BackButton from './BackButton/BackButton';
function Upload(){
  return (
    <Container>
      <BackButton />
      <PageTitle>모집</PageTitle>
      <Introduce />
      <Input />
    </Container>
  ) 
}

export default Upload