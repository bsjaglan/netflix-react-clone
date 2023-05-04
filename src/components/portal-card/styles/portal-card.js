import {Link} from "react-router-dom";
import styled from "styled-components/";

export const Body = styled.div`
  position: absolute;
  top: ${({top}) => `${Math.ceil(top) + 40}px`};
  left: 0;
  right: 0;

  height: 94vh;

  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
  background-color: #141414;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    margin: auto 5%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  z-index: 1;

  background: rgba(0, 0, 0, 0.6);

  img {
    width: 30px;
  }
`;

// sub component style --------------------------------------------

export const TopInfoSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 5%;
`;
export const MoreLikeThisSection = styled.div``;
export const AboutSection = styled.div``;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  width: ${({width}) => width || "100%"};
  gap: 15px;
`;

export const Text = styled.div`
  font-size: ${({size}) => size || "16px"};
  color: ${({color}) => color || "white"};
  font-weight: ${({fontWeight}) => fontWeight};

  &.title {
    color: gray;
    font-size: 14px;
    margin-right: 2px;
  }
`;
export const TextLink = styled(Link)`
  font-size: 14px;
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline 1px gray;
  }
`;
