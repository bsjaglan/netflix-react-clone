import React from "react";
import {
  Body,
  DarkFilter,
  Section,
  Title,
  SubTitle,
  SignInBtn,
  Content,
  Group,
} from "./styles/header";

export default function Header({
  src,
  gradient,
  darkFilter,
  children,
  ...restProps
}) {
  return (
    <Body src={src} gradient={gradient} {...restProps}>
      <DarkFilter darkFilter={darkFilter} >{children}</DarkFilter>
    </Body>
  );
}

Header.Content = function HeaderContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>;
};

Header.Section = function HeaderSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Header.Group = function HeaderGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Title = function HeaderTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Header.SignInBtn = function HeaderSignInBtn({children, ...restProps}) {
  return <SignInBtn {...restProps}>{children}</SignInBtn>;
};
