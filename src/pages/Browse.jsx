import React, {useState, useEffect} from "react";

import {
  SelectProfileContainer,
  HeaderContainer,
  SlidesContainer,
} from "../containers/browse/";
import {FooterContainer} from "../containers/home";
import {Loading} from "../components";
import {UserAuth} from "../context/AuthContext";

export default function Browse() {
  const {profile} = UserAuth();

  // by default loading is true
  const [loading, setLoading] = useState(true);

  // lets make loading false after 3 sec, do agian when user change the profile
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    // if profile is not selected, show SelectProfileContainer else show browse page content

    !profile.displayName ? (
      <SelectProfileContainer />
    ) : (
      <>
        {
          // lets handle loading by locking and relasing body and showing selected profile in a spinner
          loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />
        }
        <HeaderContainer />
        <SlidesContainer />
        <FooterContainer />
      </>
    )
  );
}
