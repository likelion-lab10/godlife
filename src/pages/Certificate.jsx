import Container from '../components/container/Container';
import BackButton from '../components/BackButton/BackButton';
import PageTitle from '../components/PageTitle/PageTitle';
import CertificateInput from 'components/Certificate/CertificateInput';

function Certificate () {
  return (
    <Container>
      <BackButton />
      <PageTitle>챌린지 인증하기</PageTitle>
      <CertificateInput />
    </Container>
  )
}

export default Certificate