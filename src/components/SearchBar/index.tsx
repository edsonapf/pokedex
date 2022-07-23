import { MdSearch } from "react-icons/md";
import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onInputChange }: SearchBarProps) {
  return (
    <Container>
      <Input
        onChange={onInputChange}
        type="text"
        placeholder="Search a pokemon by id or name"
      />
      <SearchButton>
        <MdSearch size={20} />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
