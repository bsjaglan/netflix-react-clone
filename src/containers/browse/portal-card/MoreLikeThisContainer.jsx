import React from "react";
import {Card, MoreLikeThis, Header, PortalCard} from "../../../components";
import {useData} from "../../../context/DataContext";
import {
  randomMaturity,
  randomNum,
  truncateString,
} from "../../../helpers/extras";

function MoreLikeThisContainer() {
  const {moviesByGenre} = useData();

  return (
    <MoreLikeThis>
      <MoreLikeThis.Title>More Like This</MoreLikeThis.Title>
      <MoreLikeThis.ItemList>
        {moviesByGenre[1].items?.map((item) => (
          <MoreLikeThis.Card>
            {/* --------------------- header conatiner ------------------- */}

            <Header
              className="more-like-this-card"
              src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
            />
            <MoreLikeThis.PlayBtn />

            {/* --------------------- information main container ------------------- */}
            <MoreLikeThis.Group style={{padding: "16px"}}>
              {/* top group */}
              <MoreLikeThis.Group>
                {/* top left group */}
                <MoreLikeThis.Group
                  style={{gap: "10px", alignItems: "center", width: "55%"}}
                >
                  <Card.Match>{randomNum(20, 98)}% Match</Card.Match>
                  <Card.Maturity>
                    {randomMaturity(["TV-MA", "PG-13", "R"])}
                  </Card.Maturity>
                  <PortalCard.Text>{randomNum(2010, 2023)}</PortalCard.Text>
                </MoreLikeThis.Group>

                {/* top right group  */}
                <MoreLikeThis.Group
                  style={{
                    alignItems: "center",
                    width: "45%",
                    justifyContent: "right",
                  }}
                >
                  <Card.HoverAddButton
                    size="30px"
                    style={{backgroundColor: "#2f2f2f"}}
                  />
                </MoreLikeThis.Group>
              </MoreLikeThis.Group>

              {/* bottom container - overview */}
              <MoreLikeThis.Group style={{margin: "20px 0"}}>
                <PortalCard.Text>
                  {truncateString(item.overview, 170)}
                </PortalCard.Text>
              </MoreLikeThis.Group>
            </MoreLikeThis.Group>
          </MoreLikeThis.Card>
        ))}
      </MoreLikeThis.ItemList>
    </MoreLikeThis>
  );
}

export default MoreLikeThisContainer;
