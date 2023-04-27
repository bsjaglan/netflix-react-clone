import React from "react";
import {Row, Card} from "../../components";
import {genreIds} from '../../data/tmdbEndpoints'
function RowContainer({title, items}) {
  return (
    <Row>
      <Row.Title>{title}</Row.Title>
      <Row.ItemList>
        {items.map((item) => (
          <Card key={item.id}>
            <Card.Poster
              src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
            />
            <Card.HoverCard>
              <Card.HoverPoster
                src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
              />
              <Card.HoverButtons>
                <Card.HoverPlayButton />
                <Card.HoverAddButton />
                <Card.HoverLikeButton />
                <Card.HoverMoreInfoButton />
              </Card.HoverButtons>

              <Card.HoverDetails1>
                <Card.Match>20% Match</Card.Match>
                <Card.Maturity>PG 13</Card.Maturity>
                <Card.Duration>2h 28m</Card.Duration>
                <Card.PictureQuality>HD</Card.PictureQuality>
              </Card.HoverDetails1>

              <Card.HoverDetails2>
                {item?.genre_ids?.map((id) =>
                  genreIds.map(
                    (obj) =>
                      id === obj.id && (
                        <Card.ListItem key={id}>{obj.name}</Card.ListItem>
                      )
                  )
                )}
              </Card.HoverDetails2>
            </Card.HoverCard>
          </Card>
        ))}
      </Row.ItemList>
    </Row>
  );
}

export default RowContainer;
