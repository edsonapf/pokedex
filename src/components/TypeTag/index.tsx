import React from "react";
import { Text } from "./styles";

interface TypeTagProps {
  children: React.ReactNode;
  backgroundColor: string;
  fontColor: string;
  className: string;
  key?: string;
}

function TypeTag({
  children,
  backgroundColor,
  fontColor,
  className,
  key = "",
}: TypeTagProps) {
  return (
    <Text
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      className={className}
      key={key}
    >
      {children}
    </Text>
  );
}

export default TypeTag;
