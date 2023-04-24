import styled from "styled-components";
import {Link} from "react-router-dom";

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 450px;
  height: 660px;
  margin: 30px auto;
  padding: 60px 68px 40px;

  @media (max-width: 740px) {
    width: 100%;
    padding: 5%;
    height: 500px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Error = styled.div`
  background-color: orange;
  color: white;
  padding: 15px;
  border-radius: 4px;
`;

export const CheckBox = styled.input``;

export const TextLink = styled(Link)`
  color: #737373;
  color: ${({color}) => color};
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  font-size: ${({size}) => size};

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 15px;
  border: none;
  color: white;
  cursor: pointer;
  width: 100%;
`;

export const Text = styled.div`
  color: #737373;
  color: ${({color}) => color};
  font-size: ${({size}) => size};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;