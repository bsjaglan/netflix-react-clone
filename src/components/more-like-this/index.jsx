import React, {useState} from "react";
import {Body, Title, ItemList, MoreBtn, Card, PlayBtn, Group} from "./styles/more-like-this";

export default function MoreLikeThis({children}) {
  return <Body>{children}</Body>;
}

MoreLikeThis.Title = function MoreLikeThisTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

MoreLikeThis.ItemList = function MoreLikeThisItemList({
  children,
  ...restProps
}) {
  const [more, setMore] = useState(false);
  return (
    <>
      <ItemList more={more} {...restProps}>
        {children}
      </ItemList>
      <MoreBtn onClick={() => setMore(!more)} more={more}>
        <img src="images/icons/forward.png" />
      </MoreBtn>
    </>
  );
};

MoreLikeThis.Card = function MoreLikeThisCard({children, ...restProps}) {
  return <Card {...restProps}>{children}</Card>;
};

MoreLikeThis.PlayBtn = function MoreLikeThisPlayBtn({ ...restProps}) {
  return <PlayBtn {...restProps}><img src="images/icons/play-button-arrowhead.png"/></PlayBtn>;
};

MoreLikeThis.Group = function MoreLikeThisGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>;
};

