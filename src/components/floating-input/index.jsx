import React, {useState} from "react";
import {Body, Input, Label} from "./styles/floating-input";

export default function FloatingInput({
  placeholder,
  width,
  height,
  containerStyle,
  labelStyle,
  ...restProps
}) {

  const [isActive, setIsActive] = useState(false);

  return (
    <Body style={containerStyle} width={width} height={height}>
      <Input
        {...restProps}
        onChange={(e) =>
          e.target.value !== "" ? setIsActive(true) : setIsActive(false)
        }
      />
      <Label className={isActive ? "active" : ""} style={labelStyle} >
        {placeholder}
      </Label>
    </Body>
  );
}