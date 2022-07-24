import { ReactNode } from "react";
import { Container, Text } from "./styles";

interface EmptyOrLoadingContainerProps {
  children: ReactNode;
  text: string;
}

function EmptyOrLoadingContainer({
  children,
  text,
}: EmptyOrLoadingContainerProps) {
  return (
    <Container>
      {children}
      <Text>{text}</Text>
    </Container>
  );
}

export default EmptyOrLoadingContainer;
