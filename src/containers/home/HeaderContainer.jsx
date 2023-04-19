import React from "react";
import {Header, Logo, } from "../../components/";
import {OptFormContainer} from "./index";

function HeaderContainer() {
  return (
    <Header gradient darkFilter className="home">
      <Header.Content>
        <Header.Section>
          <Logo size="medium" mediaQuery={{media: "960px", newSize: "100px"}} />
          <Header.Group>
            <p>Language</p>
            <Header.SignInBtn>Sign In</Header.SignInBtn>
          </Header.Group>
        </Header.Section>

        <Header.Section direction="column">
          <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
          <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
        </Header.Section>

        <Header.Section>
          <OptFormContainer />
        </Header.Section>
      </Header.Content>
    </Header>
  );
}

export default HeaderContainer;
