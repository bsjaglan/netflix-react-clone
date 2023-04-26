import React from "react";
import {Logo, Profiles} from "../../components";
import {UserAuth} from "../../context/AuthContext";

function SelectProfileContainer() {
  const {setProfile, profileList} = UserAuth();

  return (
    <>
      <Logo size="medium" style={{margin: "2.5% 5% 5%"}} />
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>

          {profileList.map((item) => (
            <Profiles.User
              key={item.id}
              onClick={() =>
                setProfile({
                  displayName: item.displayName,
                  photoURL: item.photoURL,
                })
              }
            >
              <Profiles.ProfileImage src={item.photoURL} />
              <Profiles.Name>{item.displayName}</Profiles.Name>
            </Profiles.User>
          ))}
          
        </Profiles.List>
        <Profiles.Button>Manage profiles</Profiles.Button>
      </Profiles>
    </>
  );
}

export default SelectProfileContainer;
