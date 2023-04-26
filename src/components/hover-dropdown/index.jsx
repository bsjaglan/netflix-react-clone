import React from "react";
import {
  Body,
  SelectedItem,
  DownArrowIcon,
  UpArrowIcon,
  OptionsList,
  Content,
  Item,
  UserPicture,
  UserName,
  SignOutBtn,
} from "./styles/hover-dropdown";

export default function HoverDropdown({children, responsiveDownIcon}) {
  return <Body responsiveDownIcon={responsiveDownIcon}>{children}</Body>;
}

HoverDropdown.SelectedItem = function HoverDropdownSelectedItem({
  children,
  ...restProps
}) {
  return (
    <SelectedItem {...restProps}>
      {children}
      <DownArrowIcon src="images/icons/up-arrow.png" />
    </SelectedItem>
  );
};

HoverDropdown.OptionsList = function HoverDropdownOptionsList({
  children,
  arrowLeftPosition,
  ...restProps
}) {
  return (
    <OptionsList {...restProps}>
      <UpArrowIcon
        arrowLeftPosition={arrowLeftPosition}
        src="images/icons/up-arrow.png"
      />
      <Content>{children}</Content>
    </OptionsList>
  );
};

HoverDropdown.Item = function HoverDropdownItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>;
};

HoverDropdown.UserPicture = function HoverDropdownUserPicture({...restProps}) {
  return <UserPicture {...restProps} />;
};

HoverDropdown.UserName = function HoverDropdownUserName({
  children,
  ...restProps
}) {
  return <UserName {...restProps}>{children}</UserName>;
};

HoverDropdown.SignOutBtn = function HoverDropdownSignOutBtn({
  children,
  ...restProps
}) {
  return <SignOutBtn {...restProps}>{children}</SignOutBtn>;
};
