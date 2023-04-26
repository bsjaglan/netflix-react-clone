import React from "react";
import {HoverDropdown} from "../../components/";
import {UserAuth} from "../../context/AuthContext";

function ProfileDropdownContainer() {
  const {profile, profileList} = UserAuth();

  return (
    <HoverDropdown responsiveDownIcon>
      <HoverDropdown.SelectedItem>
        <HoverDropdown.UserPicture
          src={`images/users/${profile.photoURL}.png`}
        />
      </HoverDropdown.SelectedItem>

      <HoverDropdown.OptionsList arrowLeftPosition="190px">

        {/* render all the profiles of user as Items of optionList */}
        {profileList.map((item) => (
          <HoverDropdown.Item key={item.id}>
            <HoverDropdown.UserPicture
              src={`images/users/${item.photoURL}.png`}
            />
            <HoverDropdown.UserName>{item.displayName}</HoverDropdown.UserName>
          </HoverDropdown.Item>
        ))}

        {/* sign out btn at the last */}
        <HoverDropdown.SignOutBtn>Sign out</HoverDropdown.SignOutBtn>
        
      </HoverDropdown.OptionsList>
    </HoverDropdown>
  );
}

export default ProfileDropdownContainer;
