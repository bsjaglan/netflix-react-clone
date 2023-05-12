import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;

  position: absolute;
  top: 20vw;
  left: 5%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45); 

  @media (max-width: 740px) {
    font-size: 30px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;

  background-color: #e6e6e6;
  color: #000;
  border: none;

  padding: 10px 20px;
  border-radius: 5px;  

  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  img {
    margin-right: 10px;
  }

  :hover {
    background: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 740px) {
    font-size: 14px;
    padding: 7px 12px;
  }
`;

export const MoreInfoButton = styled(PlayButton)`
  background-color: rgb(109, 109, 110, 0.8);
  color: white;

  img {
    filter: invert(1);
    width: 25px;
  }

  :hover {
    background: rgb(109, 109, 110, 0.6);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  min-width: 100px;
  align-items: center;
  margin-top: 20px;
`;
