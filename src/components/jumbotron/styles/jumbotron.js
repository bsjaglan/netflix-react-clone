import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  padding: 5%;
  border-bottom: 8px solid #222;
`;

export const Body = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  align-items: center;
  flex-direction: ${({direction}) => direction};

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
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
