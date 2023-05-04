import React from "react";
import {PortalCard} from "../../../components";

function AboutContainer({item}) {
  return (
    <PortalCard.Group style={{padding: '20px 5%'}}>
      <PortalCard.Text size="30px">
        About {item?.title || item?.name || item?.original_name}
      </PortalCard.Text>
      
    </PortalCard.Group>
  );
}

export default AboutContainer;
