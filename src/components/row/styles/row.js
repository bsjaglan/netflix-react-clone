import styled from "styled-components/macro";

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover .large {
    visibility: visible;
  }
`;

export const ExploreOption = styled.span`
  visibility: hidden;
  width: 0px;
  height: 15px;
  overflow: hidden;
  font-size: 12px;
  color: #54b9c5;
  margin: 4px 5px;
  transition: width 0.5s;
  transition-timing-function: ease-in-out;
`;

export const Title = styled.h1`
  display: flex;
  align-items: end;
  position: absolute;
  top: 40px;
  font-size: 24px;
  color: white;
  margin: 0 5%;
  cursor: pointer;
  z-index: 1;

  & .large {
    visibility: hidden;
    height: 15px;
    margin-bottom: 5px;
    margin-left: 2px;
  }

  & .small {
    margin-left: 2px;
    height: 9px;
  }

  &:hover ${ExploreOption} {
    visibility: visible;
    width: 100px;
  }

  &:hover .large {
    visibility: hidden;
  }
`;
export const ItemList = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-right: 5%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
