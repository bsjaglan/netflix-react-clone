import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  gap: 30px;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${ProfileImage} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Button = styled.button`
 padding: 8px 15px;
 color: gray;
 background: #141414;
 border: 1px solid white;

 &:hover {
  font-weight: bold;
  color: white;
}
`;
