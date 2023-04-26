import React, {useState, useEffect} from "react";

import {SelectProfileContainer, HeaderContainer} from "../containers/browse/";
import {Loading} from "../components";
import {UserAuth} from "../context/AuthContext";

export default function Browse() {
  const {user} = UserAuth();

  // profiles to be selected via SelectProfileContainer to show on Browse Navebar
  const [profile, setProfile] = useState({});

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

  !profile.displayName ? 
  (<SelectProfileContainer user={user} setProfile={setProfile} />) :
  (<>
      {
        // lets handle loading by locking and relasing body and showing selected profile in a spinner
        loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />
      }
      <HeaderContainer profile={profile}/>
      <div style={{height: '1000px'}}></div>
      

  </>) 
  
  );    
}
