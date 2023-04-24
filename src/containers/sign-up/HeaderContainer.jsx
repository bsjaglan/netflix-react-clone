import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {Logo} from "../../components";
import {ROUTES} from "../../constants/routes";

export default function HeaderContainer() {
  return (
    <Header>
      <Logo size="medium" />
      <Text to={ROUTES.SIGN_IN}>Sign In</Text>
    </Header>
  );
}

const Header = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  border-bottom: 3px solid #f3f3f3;
`;

const Text = styled(Link)`
  color: black;
  font-size: 19px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
