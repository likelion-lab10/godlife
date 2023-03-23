import ImgInput from './ImgInput';
import Introduce from './Introduce';
import Container from './Container';
import BackButton from './BackButton/BackButton';
import PageTitle from './PageTitle/PageTitle';
import CategoryButton from './CategoriesButton';
function Upload(){
  return (
    <Container>
      <BackButton />
      <PageTitle>모집</PageTitle>
      <CategoryButton />
      <Introduce />
      <ImgInput />
    </Container>
  ) 
}

export default Upload