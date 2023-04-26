import React from "react";
import {HoverDropdown} from "../../components/";
import {UserAuth} from "../../context/AuthContext";

function ProfileDropdownContainer() {
  const {profile} = UserAuth();
  
  return (
    <HoverDropdown responsiveDownIcon>
      <HoverDropdown.SelectedItem>
        <HoverDropdown.UserPicture
          src={`images/users/${profile.photoURL}.png`}
        />
      </HoverDropdown.SelectedItem>
      <HoverDropdown.OptionsList arrowLeftPosition="190px">
        <HoverDropdown.Item>Hello</HoverDropdown.Item>
        <HoverDropdown.Item>World</HoverDropdown.Item>
        <HoverDropdown.Item>wsup</HoverDropdown.Item>
      </HoverDropdown.OptionsList>
    </HoverDropdown>
  );
}

export default ProfileDropdownContainer;
