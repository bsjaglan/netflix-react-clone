import styled from "styled-components/macro";

export const HoverCard = styled.div`
  visibility: hidden;
  position: absolute;
  top: 38px;
  left: -75px;
  width: 300px;
  background: #141414;
  flex-direction: column;
  z-index: 10;
  transition: 0s visibility;
  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.94);

  &:first-of-type {
    left: -20px;
  }
`;
export const Body = styled.div`
  position: relative;
  width: 165px;
  padding: 10px;
  height: 350px;
  padding-top: 80px;

  &:first-of-type {
    margin-left: 5%;
  }

  &:hover ${HoverCard} {
    display: flex;
    cursor: pointer;
    visibility: visible;
    transition-delay: 1.5s;
  }
`;

export const HoverPlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  padding-left: 3px;
  cursor: pointer;
  border: none;

  & img {
    width: 15px;
    height: 15px;
    object: contain;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const HoverAddButton = styled(HoverPlayButton)`
  border: 2px solid gray;
  background: #141414;
  padding: 0;

  & img {
    width: 20px;
    height: 20px;
    filter: invert(0);
  }
  &:hover {
    opacity: 1;
    border: 2px solid white;
  }
`;

export const HoverButtons = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;

  & button:last-of-type {
    margin-left: 125px;
  }
`;

export const HoverLikeButton = styled(HoverAddButton)``;

export const HoverMoreInfoButton = styled(HoverAddButton)`
  & img {
    width: 15px;
    height: 15px;
    transform: rotate(90deg);
  }
`;

export const HoverDetails1 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;
export const HoverDetails2 = styled.ul`
  color: white;
  display: flex;
  padding: 10px;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  z-index: -1;
  width: 150px;
  object: contain;
  cursor: pointer;
`;

export const HoverPoster = styled.img`
  width: 300px;
  object: contain;
`;

export const Match = styled.div`
  color: #46d369;
  font-weight: 700;
`;
export const Maturity = styled.div`
  border: 1px solid gray;
  padding: 2px 5px;
`;
export const Duration = styled.div``;
export const PictureQuality = styled.div`
  font-size: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 2px 6px;
`;

export const ListItem = styled.li`
  color: gray;

  &:first-of-type {
    list-style-type: none;
  }
`;

export const ListText = styled.span`
  color: white;
  font-size: 12px;
  margin-right: 25px;
`;
