import axios from "axios";
import { useEffect, useState } from "react";
import SearchHeader from "../components/header/SearchHeader";
import ChallengeDetails from "../components/challengeDetails/ChallengeDetails";
const SearchPage = () => {
  const [datas, setDatas] = useState([]);
  const [userInput, setUserInput] = useState("");
  // const [searchDatas, setSearchDatas] = useState([]);

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  // const searched = searchDatas.filter((item) =>
  //   item.name.toLowerCase().includes(userInput)
  // );

  useEffect(() => {
    axios
      .get("http://localhost:9000/challengeDetail")
      .then((res) => setDatas(res.data));
  }, []);

  return (
    <>
      <SearchHeader setUserInput={setUserInput} />
      <ChallengeDetails datas={datas} userInput={userInput} />
    </>
  );
};

export default SearchPage;
