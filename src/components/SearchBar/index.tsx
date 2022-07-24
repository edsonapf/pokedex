import { MdSearch } from "react-icons/md";
import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonPress: () => void;
  value: string;
}

function SearchBar({
  onInputChange,
  onSearchButtonPress,
  value,
}: SearchBarProps) {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearchButtonPress();
    }
  };

  return (
    <Container>
      <Input
        onChange={onInputChange}
        value={value}
        type="text"
        placeholder="Search a pokemon by id or name"
        onKeyUp={handleKeyUp}
      />
      <SearchButton onClick={onSearchButtonPress}>
        <MdSearch size={20} />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
