import React from "react";
import {
  Body,
  Title,
  Error,
  CheckBox,
  Button,
  Text,
  TextLink,
  Group
} from "./styles/form";

export default function CustomForm({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

CustomForm.Title = function CustomFormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

CustomForm.Error = function CustomFormError({error, ...restProps}) {
  return <Error {...restProps}>{error}</Error>;
};

CustomForm.CheckBox = function CustomFormCheckBox({children, ...restProps}) {
  return <CheckBox type="checkbox" {...restProps} />;
};

CustomForm.Button = function CustomFormButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>;
};

CustomForm.Group = function CustomFormGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>;
};

CustomForm.Text = function CustomFormText({
  children,
  size,
  color,
  ...restProps
}) {
  return (
    <Text size={size} color={color} {...restProps}>
      {children}
    </Text>
  );
};

CustomForm.TextLink = function CustomFormTextLink({
  children,
  size,
  color,
  ...restProps
}) {
  return (
    <TextLink size={size} color={color} {...restProps}>
      {children}
    </TextLink>
  );
};
