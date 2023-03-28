import {
  CreateChallengeButton,
  CurrentChallengeContainer,
  Logo,
  Navbar,
  MainChallenge,
  SearchHome,
  PageSecondTitle,
} from 'components';

function Main() {
  return (
    <div>
      <Logo />
      <SearchHome />
      <CreateChallengeButton />
      <PageSecondTitle>챌린지</PageSecondTitle>
      <MainChallenge/>
      <PageSecondTitle>현재 모집중인 챌린지</PageSecondTitle>
      <CurrentChallengeContainer />
      <Navbar />
    </div>
  );
}

export default Main;
