import tw from "tailwind-styled-components";
import ChallengeDetailButton from "./ChallengeDetailButton";
const ChallengeDetail = () => {
  return (
    <ChallengeDetailContainer>
      <ChallengeDetailImg
        src="https://www.goyang.go.kr/resources/park/images/content/img-walkLoad1-2.png"
        alt="물 마시기"
      />
      <div className="text-right">
        <h2 className="text-xl	">미라클 모닝</h2>
        <ChallengeDetailContent># 6시</ChallengeDetailContent>
        <p>
          <ChallengeDetailDate dateTime="2023-03-10">
            23.03.10
          </ChallengeDetailDate>
          ~
          <ChallengeDetailDate dateTime="2023-03-29">
            23.03.29
          </ChallengeDetailDate>
        </p>
        <ChallengeDetailButton>참여하기</ChallengeDetailButton>
        <ChallengeDetailButton>삭제하기</ChallengeDetailButton>
      </div>
    </ChallengeDetailContainer>

    // my-0
    // mx-auto
  );
};

export default ChallengeDetail;

const ChallengeDetailContainer = tw.div`
  bg-slate-200
  p-4
  rounded-2xl	
  w-72
  flex
 
  my-2
  mx-auto
  `;
const ChallengeDetailImg = tw.img`
rounded-2xl	
w-28
h-28
mr-5
`;

const ChallengeDetailContent = tw.div`
text-base
`;

const ChallengeDetailDate = tw.time`
text-xs	
text-gray
`;
