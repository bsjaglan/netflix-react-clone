import React from "react";
import {Header, Feature, Card} from '../../../components'

function HeaderContainer({item}) {
  return (
    <>
      <Header
        className="portal-card"
        src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
      />
      <Feature>
        <Feature.Title >
          {item?.title || item?.name || item?.original_name}
        </Feature.Title>
        <Feature.Buttons>
          <Feature.PlayButton>Play</Feature.PlayButton>
          <Card.HoverAddButton size="38px" />
          <Card.HoverLikeButton size="38px" />
        </Feature.Buttons>
      </Feature>
    </>
  );
}

export default HeaderContainer;
