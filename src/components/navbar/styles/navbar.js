import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const Body = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  gap: 20px;
  padding: 12px 5%;
  align-items: center;
  z-index: 99;

  &.black-bg {
    background: black;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  margin-right: 13px;
  // transition: 0.15s;
  color: rgb(255, 255, 255, 0.6);

  &: hover {
    opacity: 0.5;
  }

  &:last-of-type {
    margin: 0;
  }

  &.active {
    color: white;
  }

  @media (max-width: 1000px) and (min-width: 900px) {
    font-size: 12px;
    margin-right: 5px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;

  &: last-of-type {
    flex: 1;
    justify-content: right;
    gap: 20px;
  }
`;

export const NotificationIcon = styled.img`
  width: 27px;
  object-fit: contain;
  filter: invert(1);
  cursor: pointer;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  color: white;
  border: 0;
  outline: 0;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  padding-right: ${({active}) => (active === true ? "5px" : "0")};
  opacity: ${({active}) => (active === true ? "1" : "0")};
  width: ${({active}) => (active === true ? "200px" : "0px")};

  @media (max-width: 700px) {
    width: ${({active}) => (active === true ? "120px" : "0px")};
    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border: ${({active}) => (active === true ? "1px solid white" : "none")};

  background: ${({active}) =>
    active === true ? "rgba(0, 0, 0, 0.8)" : "none"};
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
