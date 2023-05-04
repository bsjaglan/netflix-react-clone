import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";
import {
  Body,
  Overlay,
  CloseButton,
  TopInfoSection,
  MoreLikeThisSection,
  AboutSection,
  Text,
  TextLink,
  Group,
  Title,
} from "./styles/portal-card";

export default function PortalCard({isOpen, children, onClose}) {
  // scroll to be used to determine top postion for portal body
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // if portal is open
    if (isOpen) {
      if (typeof window != "undefined" && window.document) {
        // to make non scrollable body
        document.getElementById("root").style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        // scroll event handling
        const handleScroll = () => setScroll(window.scrollY);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    } else {
      // unset the overflows
      document.body.style.overflow = "unset";
      document.getElementById("root").style.overflow = "unset";
    }
  }, [isOpen]);

  // render nothing if portal is close
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <Body top={scroll}>
        <CloseButton onClick={onClose}><img src="images/icons/close.png"/></CloseButton>
        {children}
      </Body>
    </>,
    document.getElementById("portal")
  );
}

// sub components of portal-card

PortalCard.TopInfoSection = function PortalCardTopInfoSection({
  children,
  ...restProps
}) {
  return <TopInfoSection {...restProps}>{children}</TopInfoSection>;
};

PortalCard.MoreLikeThisSection = function PortalCardMoreLikeThisSection({
  children,
  ...restProps
}) {
  return <MoreLikeThisSection {...restProps}>{children}</MoreLikeThisSection>;
};

PortalCard.AboutSection = function PortalCardAboutSection({
  children,
  ...restProps
}) {
  return <AboutSection {...restProps}>{children}</AboutSection>;
};

PortalCard.Group = function PortalCardGroup({
  width,
  children,
  direction,
  ...restProps
}) {
  return (
    <Group direction={direction} width={width} {...restProps}>
      {children}
    </Group>
  );
};

PortalCard.Text = function PortalCardText({
  children,
  size,
  color,
  fontWeight,
  ...restProps
}) {
  return (
    <Text size={size} color={color} fontWeight={fontWeight} {...restProps}>
      {children}
    </Text>
  );
};

PortalCard.TextLink = function PortalCardTextLink({children, ...restProps}) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
