import React, {useState} from "react";

import {Body, Section, Image, SubTitle, Button, Title} from "./bodyStyles";
import FormContainer from "./FormContainer";

// --------------------------------------------------------------------------------------------------------- //

function BodyContainer() {
  const [next, setNext] = useState(false);
  return (
    <Body>
      {!next ? (
        <Section>
          <Image src="images/sign-up/page1.png" />
          <Title>Finish setting up your account</Title>
          <SubTitle>
            Netflix is personalized for you. Create a password to start watching
            Netflix
          </SubTitle>
          <Button onClick={() => setNext(true)}>Next</Button>
        </Section>
      ) : (
        <FormContainer />
      )}
    </Body>
  );
}

export default BodyContainer;
