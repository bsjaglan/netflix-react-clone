import React from "react";
import {CustomForm, Header, Logo} from "../components";

function SignIn() {
  return (
    <Header className="sign-in" darkFilter>
      <Header.Content gap='0'>
        <Logo size="large" />
        <CustomForm />
      </Header.Content>
    </Header>
  );
}

export default SignIn;
