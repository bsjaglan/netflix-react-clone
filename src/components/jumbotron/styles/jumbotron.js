import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  background-color: black;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  width: 100%;
  padding: 5%;
  flex-direction: ${({direction}) => direction};
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  // border: 1px solid red;
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 740px) {
    width: 100%;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    font-size: 32px;
    font-weight: 700;
  }
`;
export const SubTitle = styled.h2`
  font-size: 24px;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  width: 100%;
`;
