import React from "react";
import styled from "styled-components/macro";

import {FormContainer, FooterContainer} from "../containers/sign-in/";
import {Logo} from "../components";

function SignIn() {
  return (
    <Body>
      <Logo size="180px" style={{margin: "20px 5%"}} />
      <FormContainer />
      <FooterContainer />
    </Body>
  );
}

export default SignIn;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url(images/header/header-background.jpg);
  background-size: cover;

  @media (max-width: 740px) {
    background: black;
  }
`;
