import React from "react";
import {
  Body,
  Title,
  SubTitle,
  Image,
  Section,
  Container,
} from "./styles/jumbotron";

export default function Jumbotron({children, direction, ...restProps}) {
  return (
    <Container>
      <Body {...restProps} direction={direction}>
        {children}
      </Body>
    </Container>
  );
}

Jumbotron.Section = function JumbotronSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({src, ...restProps}) {
  return <Image src={src} {...restProps} />;
};
