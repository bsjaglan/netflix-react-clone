import React from "react";
import {
  Body,
  Poster,
  HoverCard,
  HoverPoster,
  HoverButtons,
  HoverDetails1,
  HoverDetails2,
  HoverPlayButton,
  HoverAddButton,
  HoverLikeButton,
  HoverMoreInfoButton,
  Match,
  Maturity,
  Duration,
  PictureQuality,
  ListItem,
  ListText,
} from "./styles/card";

export default function Card({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Card.Poster = function CardPoster({...restProps}) {
  return <Poster {...restProps} />;
};

Card.HoverCard = function CardHoverCard({children, ...restProps}) {
  return <HoverCard {...restProps}>{children}</HoverCard>;
};

Card.HoverCard = function CardHoverCard({children, ...restProps}) {
  return <HoverCard {...restProps}>{children}</HoverCard>;
};

Card.HoverPoster = function CardHoverPoster({...restProps}) {
  return <HoverPoster {...restProps} />;
};

Card.HoverButtons = function CardHoverButtons({children, ...restProps}) {
  return <HoverButtons {...restProps}>{children}</HoverButtons>;
};

Card.HoverPlayButton = function CardHoverPlayButton({...restProps}) {
  return (
    <HoverPlayButton {...restProps}>
      <img src="images/icons/play-button-arrowhead.png" />
    </HoverPlayButton>
  );
};

Card.HoverAddButton = function CardHoverAddButton({...restProps}) {
  return (
    <HoverAddButton {...restProps}>
      <img src="images/icons/add.png" />
    </HoverAddButton>
  );
};

Card.HoverLikeButton = function CardHoverLikeButton({...restProps}) {
  return (
    <HoverLikeButton {...restProps}>
      <img src="images/icons/thumb-up.png" />
    </HoverLikeButton>
  );
};

Card.HoverMoreInfoButton = function CardHoverMoreInfoButton({...restProps}) {
  return (
    <HoverMoreInfoButton {...restProps}>
      <img src="images/icons/forward.png" />
    </HoverMoreInfoButton>
  );
};

Card.HoverDetails1 = function CardHoverDetails1({children, ...restProps}) {
  return <HoverDetails1 {...restProps}>{children}</HoverDetails1>;
};

Card.HoverDetails2 = function CardHoverDetails2({children, ...restProps}) {
  return <HoverDetails2 {...restProps}>{children}</HoverDetails2>;
};

Card.ListItem = function CardListItem({children, ...restProps}) {
  return (
    <ListItem>
      <ListText {...restProps}>{children}</ListText>
    </ListItem>
  );
};

Card.Match = function CardMatch({children, ...restProps}) {
  return <Match {...restProps}>{children}</Match>;
};
Card.Maturity = function CardMaturity({children, ...restProps}) {
  return <Maturity {...restProps}>{children}</Maturity>;
};
Card.Duration = function CardDuration({children, ...restProps}) {
  return <Duration {...restProps}>{children}</Duration>;
};
Card.PictureQuality = function CardPictureQuality({children, ...restProps}) {
  return <PictureQuality {...restProps}>{children}</PictureQuality>;
};
