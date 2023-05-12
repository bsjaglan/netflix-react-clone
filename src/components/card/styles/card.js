import styled from "styled-components/macro";

export const HoverCard = styled.div`
  visibility: hidden;
  transition: 0s visibility;
  z-index: 1;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 38px;
  left: -75px;

  width: 300px;
  background: #141414;
  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.94);

  // to position the first hover card properly
  :first-of-type {
    left: -20px;
  }
`;

export const Body = styled.div`
  position: relative;

  display: flex;

  height: 350px;
  padding: 80px 10px 10px;

  &:first-of-type {
    margin-left: 5%;
  }

  // on hover body show hover card with delay
  :hover ${HoverCard} {
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
  padding-left: 3px;

  overflow: hidden;
  cursor: pointer;
  border: none;

  img {
    width: 40%;
    height: 40%;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const HoverAddButton = styled(HoverPlayButton)`
  border: 2px solid gray;
  background: ${({color}) => color || "#2a2a2a99"};

  padding: 0;
  width: ${({size}) => size || "35px"};
  height: ${({size}) => size || "35px"};

  img {
    width: 70%;
    height: 70%;
    filter: invert(0);
  }

  :hover {
    opacity: 1;
    border: 2px solid white;
  }
`;

export const HoverButtons = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;

  button:last-of-type {
    margin-left: 125px;
  }
`;

export const HoverLikeButton = styled(HoverAddButton)`
img {
  filter: invert(1);
}
`;

export const HoverMostLikeButton = styled.div`
  display: flex;

  background-color: red;

  padding: 2px;
  width: ${({size}) => size || "25px"};
  height: ${({size}) => size || "25px"};
  border-radius: 2px;

  img {
    filter: invert(1);
  }
`;

export const HoverMoreInfoButton = styled(HoverAddButton)`
  img {
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
  width: 170px;
  object: contain;
  cursor: pointer;
`;

export const Rank = styled.img`
  z-index: -1;
  width: 130px;
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

  :first-of-type {
    list-style-type: none;
  }
`;

export const ListText = styled.span`
  color: white;
  font-size: 12px;
  margin-right: 25px;
`;
