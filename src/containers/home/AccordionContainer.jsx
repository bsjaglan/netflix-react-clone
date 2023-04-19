import React from "react";
import {Accordion} from "../../components/";
import faqsData from "../../data/faqsData.json";

function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Content>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Question>{item.header}</Accordion.Question>
            <Accordion.Answer>{item.body}</Accordion.Answer>
          </Accordion.Item>
        ))}
      </Accordion.Content>
    </Accordion>
  );
}
export default AccordionContainer;
