import styled from "styled-components/macro";
import {HoverMoreInfoButton} from "../../card/styles/card";

export const Body = styled.div`
    display: flex:
    flex-direction: column;
    padding: 20px 5%;
`;
export const Title = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
`;
export const ItemList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  overflow: hidden;
  height: ${({more}) => (more ? "100%" : "600px")};
  border-bottom: 1px solid gray;
`;

export const MoreBtn = styled(HoverMoreInfoButton)`
  position: relative;
  top: -15px;
  left: 45%;

  img {
    transform: ${({more}) => (more ? "rotate(-90deg)" : "rotate(90deg)")};
  }
  :hover {
    background-color: gray;
  }
`;

export const PlayBtn = styled.div`
  border: 1px solid white;
  padding: 2px;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: absolute;
  top: 10%;
  left: 40%;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);

  img {
    margin-left: 5px;
    filter: invert(1);
    width: 50%;
    height: 50%;
  }
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 242px;
  height: 400px;
  background-color: #2f2f2f;

  :hover {
    ${PlayBtn} {
      display: flex;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
`;