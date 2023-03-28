import tw from "tailwind-styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const SearchForm = ({ setUserInput }) => {
  // const [searchValue, setSearchVale] = useState("");
  // console.log(searchValue);

  return (
    <>
      <SearchInputForm>
        <SearchInput
          type="search"
          name="q"
          placeholder="검색"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <AiOutlineSearch className="fill-gray-400	absolute top-1.5 left-3" />
      </SearchInputForm>
    </>
  );
};
export default SearchForm;

const SearchInputForm = tw.form`
  relative
  inline
  w-2/3	
  max-w-xs	
  `;
const SearchInput = tw.input`
  bg-zinc-100
  rounded-full
  outline-none	
  pl-9
  pr-3
  h-7
  text-sm	
  w-full
`;
