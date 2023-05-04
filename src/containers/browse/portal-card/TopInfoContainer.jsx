import React from "react";
import {PortalCard, Card} from "../../../components";
import {genreIds} from "../../../data/tmdbEndpoints";
import {castList, thisMovieIsList} from "../../../data/sampleData";

function TopInfoContainer({item}) { 

  return (
    <PortalCard.TopInfoSection>
      {/* left container in TopInfoSection */}
      <PortalCard.Group direction="column" width="70%">
        <PortalCard.Group>
          <Card.Match>98% Match</Card.Match>
          <PortalCard.Text>2014 1h53m</PortalCard.Text>
          <Card.PictureQuality>HD</Card.PictureQuality>
        </PortalCard.Group>

        <PortalCard.Group style={{alignItems: "center"}}>
          <Card.Maturity>PG-13</Card.Maturity>
          <PortalCard.Text>lanugage, smoking</PortalCard.Text>
        </PortalCard.Group>

        <PortalCard.Group>
          <Card.HoverMostLikeButton />
          <PortalCard.Text fontWeight="800">Most Liked</PortalCard.Text>
        </PortalCard.Group>
        <PortalCard.Text>{item?.overview}</PortalCard.Text>
      </PortalCard.Group>

      {/* right container in TopInfoSection */}
      <PortalCard.Group direction="column" width="30%">
        {/* line 1 - casting info */}
        <PortalCard.Group style={{flexWrap: "wrap", gap: "2px"}}>
          <PortalCard.Text className="title">Cast: </PortalCard.Text>
          {castList.map((person) => (
            <PortalCard.TextLink key={person.id}>
              {person.name}
              {", "}
            </PortalCard.TextLink>
          ))}
        </PortalCard.Group>

        {/* line 2 - genere info */}
        <PortalCard.Group style={{flexWrap: "wrap", gap: "2px"}}>
          <PortalCard.Text className="title">Genre: </PortalCard.Text>
          {item?.genre_ids?.map((id) =>
            genreIds.map(
              (obj) =>
                id === obj.id && (
                  <PortalCard.TextLink key={id}>
                    {obj.name}
                    {", "}
                  </PortalCard.TextLink>
                )
            )
          )}
        </PortalCard.Group>

        {/* line 3 - this is movie is info */}
        <PortalCard.Group style={{flexWrap: "wrap", gap: "2px"}}>
          <PortalCard.Text className="title">This movie is: </PortalCard.Text>
          {thisMovieIsList.map((item) => (
            <PortalCard.TextLink key={item.id}>
              {item.text}
              {", "}
            </PortalCard.TextLink>
          ))}
        </PortalCard.Group>
      </PortalCard.Group>
    </PortalCard.TopInfoSection>
  );
}

export default TopInfoContainer;
