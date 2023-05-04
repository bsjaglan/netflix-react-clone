import React from "react";
import {PortalCard} from "../../components";
import {
  TopInfoContainer,
  HeaderContainer,
  MoreLikeThisContainer,
  AboutContainer,
} from "./portal-card";

function PortalCardContainer({item, isOpen, onClose}) {
  return (
    <PortalCard isOpen={isOpen} onClose={onClose}>
      <HeaderContainer item={item} />
      <TopInfoContainer item={item} />
      <MoreLikeThisContainer />
      <AboutContainer item={item} />
    </PortalCard>
  );
}

export default PortalCardContainer;
