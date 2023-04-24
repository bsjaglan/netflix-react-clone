import React from "react";
import {
  Container,
  Body,
  Input,
  Label,
  ErrorText,
} from "./styles/floating-input";

export default function FloatingInput({
  value,
  placeholder,
  width,
  height,
  margin,
  isTouched,
  haveErrors,
  className,
  ...restProps
}) {
  return (
    <Container margin={margin || '0'}>
      <Body width={width} height={height}>
        <Input
          value={value}
          {...restProps}
          className={`${haveErrors && isTouched ? "input-error" : ""} ${className}`}
        />
        <Label isFilled={value ? true : false}>{placeholder}</Label>
      </Body>
      {haveErrors && isTouched && <ErrorText className={className}>{haveErrors}</ErrorText>}
    </Container>
  );
}
