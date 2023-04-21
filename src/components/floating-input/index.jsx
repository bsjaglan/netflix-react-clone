import React, {useState} from "react";
import {Container, Body, Input, Label, ErrorText} from "./styles/floating-input";

export default function FloatingInput({
  value,
  placeholder,
  width,
  height,
  containerStyle,
  labelStyle,
  isTouched,
  haveErrors,
  ...restProps
}) {
  return (
    <Container>
      <Body style={containerStyle} width={width} height={height}>
        <Input
          value={value}
          {...restProps}
          className={haveErrors && isTouched ? "input-error" : ""}
        />
        <Label className={value && "filled"} style={labelStyle}>
          {placeholder}
        </Label>
      </Body>
      {haveErrors && isTouched && <ErrorText>{haveErrors}</ErrorText>}
    </Container>
  );
}
