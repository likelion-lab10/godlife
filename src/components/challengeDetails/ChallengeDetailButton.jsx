import tw from "tailwind-styled-components";

const ChallengeDetailButton = ({ children, value }) => {
  const onClickButton = () => {
    value === "참여하기"
      ? alert("해당 챌린지에 참여하시겠습니까?")
      : alert("해당 챌린지를 삭제하시겠습니까?");
  };
  return (
    <ChallengeDetailButtonStyle onClick={onClickButton}>
      {children}
    </ChallengeDetailButtonStyle>
  );
};

export default ChallengeDetailButton;

const ChallengeDetailButtonStyle = tw.button`
  bg-black
  text-white
  text-xs	
  px-2
  py-1
  rounded-2xl
  ml-1
  mt-3
`;
