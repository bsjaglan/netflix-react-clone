import React from "react";
import {signOut} from "firebase/auth";

import {auth} from "../../config/firebase";
import {HoverDropdown} from "../../components/";
import {UserAuth} from "../../context/AuthContext";
import {ROUTES} from "../../constants/routes";
import {useNavigate} from "react-router-dom";

function ProfileDropdownContainer() {
  const {profile, profileList} = UserAuth();
  const navigate = useNavigate();

  // handle sign out button
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate(ROUTES.HOME))
      .catch((e) => console.log("Sign out error --> " + e));
  };

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
        <HoverDropdown.SignOutBtn onClick={handleSignOut}>
          Sign out
        </HoverDropdown.SignOutBtn>
      </HoverDropdown.OptionsList>
    </HoverDropdown>
  );
}

export default ProfileDropdownContainer;
