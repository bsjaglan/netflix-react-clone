import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const Content = styled.div`
  // border: 1px solid orange;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const Item = styled.div`
  // border: 1px solid red;
`;
export const Question = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 24px;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;

  :hover {
    background-color: #404040;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Answer = styled.div`
  font-size: 24px;
  background-color: #303030;

  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
