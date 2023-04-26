import React from "react";
import {Logo, Profiles} from "../../components";

function SelectProfileContainer({user, setProfile}) {
  return (
    <>
      <Logo size="medium" style={{margin: "2.5% 5% 5%"}} />
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.ProfileImage src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: "Kids",
                photoURL: "6",
              })
            }
          >
            <Profiles.ProfileImage src="6" />
            <Profiles.Name>Kids</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
        <Profiles.Button>Manage profiles</Profiles.Button>
      </Profiles>
    </>
  );
}

export default SelectProfileContainer;
