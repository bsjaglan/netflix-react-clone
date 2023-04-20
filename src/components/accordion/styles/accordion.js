import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  align-items: center;
  background-color: black;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-top: 5%;

  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 5%;
`;
export const Item = styled.div`
  margin-bottom: 10px;
`;
export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2px;
  font-size: 24px;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;

  :hover {
    background-color: #404040;
  }

  img {
    width: 30px;
    background-color: transparent;

    @media (max-width: 600px) {
      width: 20px;
    }
  }

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
export const Answer = styled.div`
  font-size: 24px;
  background-color: #303030;
  white-space: pre-wrap;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  &.open {
    max-height: 600px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
    background-color: #303030;
  }

  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
