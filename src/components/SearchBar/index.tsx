import { MdSearch } from "react-icons/md";
import { Container, Input, SearchButton } from "./styles";

function SearchBar() {
  return (
    <Container>
      <Input type="text" placeholder="Search a pokemon by id or name" />
      <SearchButton>
        <MdSearch size={20} />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
