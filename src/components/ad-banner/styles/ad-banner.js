import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 22px;
  background: white;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  background: red;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
`;

export const Text = styled.p`
  color: black;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #1d63c4;
  text-decoration: none;
`;
