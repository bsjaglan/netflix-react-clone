import React from "react";
import {Body, Button, Text, Group} from "./styles/opt-form";


export default function OptForm({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({children, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
      <img
        src="./images/icons/forward.png"
        alt="forward-icon"
      />
    </Button>
  );
};

OptForm.Group = function OptFormGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
  };