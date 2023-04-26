import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Body = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  transition: 0.5s;
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

  @media (max-width: 980px) {
    font-size: 12px;
    margin-right: 10px;
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
