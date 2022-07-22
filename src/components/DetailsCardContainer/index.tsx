import { Container } from "./styles";

interface DetailsCardContainerProps {
  children: React.ReactNode;
}

function DetailsCardContainer({ children }: DetailsCardContainerProps) {
  return <Container>{children}</Container>;
}

export default DetailsCardContainer;
