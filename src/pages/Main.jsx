import { CurrentChallengeContainer, Logo, Navbar, PageSecondTitle } from 'components';

function Main() {
  return (
    <div>
      <Logo/>
      <PageSecondTitle>현재 모집중인 챌린지</PageSecondTitle>
      <CurrentChallengeContainer />
      <Navbar />
    </div>
  );
}

export default Main;
