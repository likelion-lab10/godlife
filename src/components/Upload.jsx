import Introduce from './Introduce';
import Container from './Container';
import BackButton from './BackButton/BackButton';
import PageTitle from './PageTitle/PageTitle';
import CategoryButton from './CategoriesButton';
import Input from './Input';
function Upload(){
  return (
    <Container>
      <BackButton />
      <PageTitle>모집</PageTitle>
      <CategoryButton />
      <Introduce />
      <Input />
    </Container>
  ) 
}

export default Upload