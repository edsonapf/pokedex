import { CloseButton, Container } from "./styles";

interface ChipProps {
  text: string;
  onRemoveChip: () => void;
}

function Chip({ text, onRemoveChip }: ChipProps) {
  return (
    <Container>
      <span>{text}</span>
      <CloseButton onClick={onRemoveChip}>X</CloseButton>
    </Container>
  );
}

export default Chip;
