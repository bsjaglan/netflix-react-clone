import React from "react";
import {Body, Title, ItemList, ExploreOption} from "./styles/row";

export default function Row({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Row.Title = function RowTitle({children, ...restProps}) {
  return (
    <Title {...restProps}>
      {children}
      <img src="images/icons/forward_blue.png" className="large"/>
      <ExploreOption>
        Explore All <img src="images/icons/forward_blue.png" className="small"/>
      </ExploreOption>
    </Title>
  );
};

Row.ItemList = function RowItemList({children, ...restProps}) {
  return <ItemList {...restProps}>{children}</ItemList>;
};
