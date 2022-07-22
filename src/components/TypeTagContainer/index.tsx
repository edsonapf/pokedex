import { Container } from "./styles";

interface TypeTagContainerProps {
  children: React.ReactNode;
}

function TypeTagContainer({ children }: TypeTagContainerProps) {
  return <Container>{children}</Container>;
}

export default TypeTagContainer;
