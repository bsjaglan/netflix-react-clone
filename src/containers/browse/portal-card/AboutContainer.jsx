import React from "react";
import {PortalCard, Card} from "../../../components";
import {getGenreFromIDs} from "../../../helpers/getGenre";
import {Body, InfoLine, Title} from "./aboutContainerSytles";
import {castList} from "../../../data/sampleData";

function AboutContainer({item}) {
  return (
    <Body>
      <Title>About {item?.title || item?.name || item?.original_name}</Title>
      <InfoLine>
        <PortalCard.Text className="title">Directior: </PortalCard.Text>
        <PortalCard.TextLink>Baryy Sonnefeld</PortalCard.TextLink>
      </InfoLine>
      <InfoLine>
        <PortalCard.Text className="title">Cast: </PortalCard.Text>
        {castList.map((person) => (
          <PortalCard.TextLink key={person.id}>
            {person.name}
            {", "}
          </PortalCard.TextLink>
        ))}
      </InfoLine>
      <InfoLine>
        <PortalCard.Text className="title">Writer: </PortalCard.Text>
        <PortalCard.TextLink>Ed Solomon</PortalCard.TextLink>
      </InfoLine>
      <InfoLine>
        <PortalCard.Text className="title">Genre: </PortalCard.Text>
        {getGenreFromIDs(item?.genre_ids).map((genre) => (
          <PortalCard.TextLink key={genre.id}>
            {genre.name + ", "}
          </PortalCard.TextLink>
        ))}
      </InfoLine>
      <InfoLine>
        <PortalCard.Text className='title'>Maturity: </PortalCard.Text>
        <Card.Maturity>PG-13</Card.Maturity>
        <PortalCard.Text size='14px'>lanugage, smoking</PortalCard.Text>
      </InfoLine>
    </Body>
  );
}

export default AboutContainer;
