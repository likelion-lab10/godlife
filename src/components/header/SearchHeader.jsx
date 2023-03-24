import tw from "tailwind-styled-components";
import BackButton from "../BackButton";
import SearchForm from "../search/SearchForm";

const SearchHeader = ({ getValue }) => {
  return (
    <SearchHeaderForm>
      <BackButton />
      <SearchForm getValue={getValue} />
    </SearchHeaderForm>
  );
};

export default SearchHeader;

const SearchHeaderForm = tw.div`
flex
justify-between
mt-5
mb-10
`;
