import { Text } from "./styles";

interface TypeTagProps {
  title: string;
  backgroundColor: string;
  fontColor: string;
}

function TypeTag({ title, backgroundColor, fontColor }: TypeTagProps) {
  return (
    <Text backgroundColor={backgroundColor} fontColor={fontColor}>
      {title}
    </Text>
  );
}

export default TypeTag;
