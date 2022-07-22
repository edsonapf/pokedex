import React from "react";
import { Text } from "./styles";

interface TypeTagProps {
  children: React.ReactNode;
  backgroundColor: string;
  fontColor: string;
  className: string;
}

function TypeTag({
  children,
  backgroundColor,
  fontColor,
  className,
}: TypeTagProps) {
  return (
    <Text
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      className={className}
    >
      {children}
    </Text>
  );
}

export default TypeTag;
