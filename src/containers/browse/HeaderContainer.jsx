import React from "react";
import {Header, Feature} from "../../components";
import {NavbarContainer} from "./";
import {useData} from "../../context/DataContext";

function HeaderContainer() {
  const {randomMovie} = useData();

  return (
    <Header
      src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
    >
      <NavbarContainer />
      <Feature>
        <Feature.Title>
          {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
        </Feature.Title>
        <Feature.Buttons>
          <Feature.PlayButton>Play</Feature.PlayButton>
          <Feature.MoreInfoButton>More Info</Feature.MoreInfoButton>
        </Feature.Buttons>
      </Feature>
    </Header>
  );
}

export default HeaderContainer;
