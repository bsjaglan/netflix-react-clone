import React, {useEffect, useState} from "react";

import {Logo, Navbar} from "../../components";
import navOptions from "../../data/navOptions.json";
import ProfileDropdownContainer from "./ProfileDropdownContainer";
import NavDropdownContainer from "./NavDropdownContainer";

function NavbarContainer() {
  const [scrolled, setScrolled] = useState(false);

  // by default home is clicked i.e. id = 1
  const [clicked, setClicked] = useState(1);

  // can be used as media query to show some items or change sizes
  const [width, setWidth] = useState();

  // set scrolled true if we scroll > 60 along y-axis
  const handleScroll = () => {
    const position = window.scrollY;
    return position > 60 ? setScrolled(true) : setScrolled(false);
  };

  // set width true when media width is less than 800
  const handleWidth = () => setWidth(window.innerWidth);

  // add event listener to handle scroll and resize
  useEffect(() => {
    handleScroll();
    handleWidth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <Navbar className={scrolled && "black-bg"}>
      <Logo size={width > 900 ? "medium" : "100px"} />

      {width < 900 ? (
        <NavDropdownContainer clicked={clicked} setClicked={setClicked} />
      ) : (
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
      )}

      <Navbar.Group>
        <Navbar.Search />
        {width > 500 && <Navbar.TextLink>Kids</Navbar.TextLink>}
        <Navbar.NotificationIcon />
        <ProfileDropdownContainer />
      </Navbar.Group>
    </Navbar>
  );
}

export default NavbarContainer;
