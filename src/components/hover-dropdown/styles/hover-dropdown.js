import styled from "styled-components/macro";

export const UserPicture = styled.img`
  width: 40px;
  border-radius: 5px;
`;

export const UserName = styled.h3`
  color: white;
`;

export const SignOutBtn = styled.div`
  text-align: center;
  padding: 6%;
  border-top: 1px solid gray;
`;

export const UpArrowIcon = styled.img`
  width: 20px;
  height: 16px;
  filter: invert(1);
  margin-left: ${({arrowLeftPosition}) => arrowLeftPosition};
`;

export const DownArrowIcon = styled.img`
  width: 18px;
  height: 16px;
  filter: invert(1);
  transform: rotate(180deg);
`;

export const SelectedItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 30px;
  left: -200px;
  width: 300px;

  // transparetn padding to keep this overlping with Body
  // to keep hover state ON Body to OptionsList 
  padding: 20px;

  visibility: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: rgb(0, 0, 0, 0.8);
`;

export const Item = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 5%;
`;

export const Body = styled.div`
  display: flex;
  position: relative;

  &:hover ${OptionsList} {
    visibility: visible;
  }

  &:hover ${DownArrowIcon} {
    ${({responsiveDownIcon}) =>
      responsiveDownIcon && `transform: rotate(0deg);`}
  }
`;
