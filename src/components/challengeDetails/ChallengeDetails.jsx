import tw from "tailwind-styled-components";
import ChallengeDetailButton from "./ChallengeDetailButton";
import uuid from "react-uuid";

const ChallengeDetails = ({ datas }) => {
  return (
    <>
      <AllChallengeTitle>전체 챌린지</AllChallengeTitle>

      <ChallengeDetailsContainer>
        {datas.map((data) => {
          return (
            <ChallengeDetailContainer key={data.id}>
              <ChallengeDetailImg src={data.image} alt="물 마시기" />
              <div className="text-right">
                <h2 className="text-xl	">{data.title}</h2>
                {data.tags.map((tag) => {
                  return (
                    <ChallengeDetailTag
                      key={uuid()}
                    >{`# ${tag} `}</ChallengeDetailTag>
                  );
                })}

                <p>
                  <ChallengeDetailDate dateTime={data.시작일}>
                    {data.시작일}
                  </ChallengeDetailDate>
                  ~
                  <ChallengeDetailDate dateTime={data.종료일}>
                    {data.종료일}
                  </ChallengeDetailDate>
                </p>
                <ChallengeDetailButton value="참여하기">
                  참여하기
                </ChallengeDetailButton>
                <ChallengeDetailButton value="삭제하기">
                  삭제하기
                </ChallengeDetailButton>
              </div>
            </ChallengeDetailContainer>
          );
        })}
      </ChallengeDetailsContainer>
    </>
  );
};

export default ChallengeDetails;

const AllChallengeTitle = tw.h1`
  mb-5
  text-xl
`;
const ChallengeDetailsContainer = tw.div`
  grid
`;
const ChallengeDetailContainer = tw.div`
  bg-slate-200
  p-3
  rounded-2xl	
  w-80
  flex
  my-2
  mx-auto
  justify-between
  `;
const ChallengeDetailImg = tw.img`
rounded-2xl	
w-28
h-28
mr-5
`;

const ChallengeDetailTag = tw.span`
text-base
`;

const ChallengeDetailDate = tw.time`
text-xs	
text-gray
`;
