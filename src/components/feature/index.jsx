import React from "react";
import {
  Body,
  Title,
  Buttons,
  PlayButton,
  MoreInfoButton,
} from "./styles/feature";

export default function Feature({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Buttons = function FeatureButtons({children, ...restProps}) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

Feature.PlayButton = function FeaturePlayButton({children, ...restProps}) {
  return (
    <PlayButton {...restProps}>
      <img src="images/icons/play-button-arrowhead.png" width="21px" />
      {children}
    </PlayButton>
  );
};

Feature.MoreInfoButton = function FeatureMoreInfoButton({
  children,
  ...restProps
}) {
  return (
    <MoreInfoButton {...restProps}>
      <img src="images/icons/information.png"/>
      {children}
    </MoreInfoButton>
  );
};
