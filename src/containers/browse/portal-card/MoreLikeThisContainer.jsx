import React from "react";
import {Card, MoreLikeThis, Header, PortalCard} from "../../../components";
import {useData} from "../../../context/DataContext";
import {
  randomMaturity,
  randomNum,
  truncateString,
} from "../../../helpers/extras";
import {
  BottomSection,
  CardDetails,
  TopLeftSection,
  TopRightSection,
  TopSection,
} from "./moreLikeThisContainerStyles";

function MoreLikeThisContainer() {
  const {moviesByGenre} = useData();

  return (
    <MoreLikeThis>
      <MoreLikeThis.Title>More Like This</MoreLikeThis.Title>
      <MoreLikeThis.ItemList>
        {moviesByGenre[1].items?.map((item) => (
          <MoreLikeThis.Card>
            <Header
              className="more-like-this-card"
              src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
            />
            <MoreLikeThis.PlayBtn />

            <CardDetails>
              <TopSection>
                <TopLeftSection>
                  <Card.Match>{randomNum(20, 98)}% Match</Card.Match>
                  <Card.Maturity>
                    {randomMaturity(["TV-MA", "PG-13", "R"])}
                  </Card.Maturity>
                  <PortalCard.Text>{randomNum(2010, 2023)}</PortalCard.Text>
                </TopLeftSection>

                <TopRightSection>
                  <Card.HoverAddButton
                    size="30px"
                    style={{backgroundColor: "#2f2f2f"}}
                  />
                </TopRightSection>
              </TopSection>

              <BottomSection>
                <PortalCard.Text>
                  {truncateString(item.overview, 170)}
                </PortalCard.Text>
              </BottomSection>
            </CardDetails>
          </MoreLikeThis.Card>
        ))}
      </MoreLikeThis.ItemList>
    </MoreLikeThis>
  );
}

export default MoreLikeThisContainer;
