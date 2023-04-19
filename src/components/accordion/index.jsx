import React from "react";
import {Body, Title, Content, Item, Question, Answer} from "./styles/accordion";

export default function Accordion({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Content = function AccordionContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>;
};

Accordion.Item = function AccordionItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Question = function AccordionQuestion({children, ...restProps}) {
  return <Question {...restProps}>{children}</Question>;
};

Accordion.Answer = function AccordionAnswer({children, ...restProps}) {
  return <Answer {...restProps}>{children}</Answer>;
};
