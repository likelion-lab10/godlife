import axios from "axios";
import { useEffect, useState } from "react";
import SearchHeader from "../components/header/SearchHeader";
import ChallengeDetails from "../components/challengeDetails/ChallengeDetails";
const SearchPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/challengeDetail")
      .then((res) => setDatas(res.data));
  }, []);
  return (
    <>
      <SearchHeader />
      <ChallengeDetails datas={datas} />
    </>
  );
};

export default SearchPage;
