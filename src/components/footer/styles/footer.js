import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export const Section = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 15px;
  padding: 20px 0;
`;

export const SubSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CustomLink = styled(Link)`
  width: 280px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 960px) {
    width: 200px;
  }
`;

export const Body = styled.div`
  margin: 25px 5%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: black;

  // Style as per different classes for different pages
  &.sign-in {
    background: rgba(0, 0, 0, 0.7);
    @media (max-width: 740px) {
      border-top: 1px solid gray;
      background: black;
    }
  }

  &.sign-up {
    background: #f3f3f3;
    ${CustomLink}, ${Section} {
      color: #737373;
      text-decoration: none;
    }
  }
`;
