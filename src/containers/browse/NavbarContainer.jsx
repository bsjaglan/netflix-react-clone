import React, {useEffect, useState} from "react";
import {Logo, Navbar} from "../../components";
import navOptions from "../../data/navOptions.json";
import ProfileDropdownContainer from "./ProfileDropdownContainer";


function NavbarContainer() {
  const [scrolled, setScrolled] = useState(false);

  // by default home is clicked i.e. id = 1
  const [clicked, setClicked] = useState(1);

  // set scrolled true if we scroll > 60 along y-axis
  const handleScroll = () => {
    const position = window.scrollY;
    return position > 60 ? setScrolled(true) : setScrolled(false);
  };

  // add event listener to handle scroll
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={scrolled && "black-bg"}>
      <Logo size="medium" />

      {/* all nav options */}
      <Navbar.Group>
        {navOptions.map((item) => (
          /* on click only one item gets its class active  */
          <Navbar.TextLink
            key={item.id}
            onClick={() => setClicked(item.id)}
            className={clicked === item.id && "active"}
          >
            {item.text}
          </Navbar.TextLink>
        ))}
      </Navbar.Group>

      <Navbar.Group>
        <Navbar.TextLink>Kids</Navbar.TextLink>
        <Navbar.NotificationIcon />
        <ProfileDropdownContainer />
      </Navbar.Group>
    </Navbar>
  );
}

export default NavbarContainer;
