import React from "react";
import styled from "styled-components/macro";

import FormContainer from "../containers/sign-in/FormContainer";
import FooterContainer from "../containers/sign-in/FooterContainer";
import { Logo } from "../components";

function SignIn() {

  const Body = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
      url(images/header/header-background.jpg);
    background-size: cover;

    @media(max-width: 740px){
      background: black;
    }
  `;

  return (
    <Body>
      <Logo size='180px' style={{margin: '20px 5%'}}/>
      <FormContainer />
      <FooterContainer />
    </Body>
  );
}

export default SignIn;
