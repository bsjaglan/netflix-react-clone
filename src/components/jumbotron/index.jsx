import React from "react";
import {Body, Title, SubTitle, Image, Section, Item} from "./styles/jumbotron";

export default function Jumbotron({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Jumbotron.Item = function JumbotronItem({direction, children, ...restProps}) {
  return <Item direction={direction} {...restProps}>{children}</Item>;
};

Jumbotron.Section = function JumbotronSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <Image {...restProps} />;
};
