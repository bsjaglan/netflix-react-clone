import React, {useRef, useState, useEffect} from "react";
import {
  Body,
  TextLink,
  Group,
  NotificationIcon,
  Search,
  SearchIcon,
  SearchInput,
} from "./styles/navbar";

export default function Navbar({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Navbar.TextLink = function NavbarTextLink({children, ...restProps}) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Navbar.Group = function NavbarGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>;
};

Navbar.NotificationIcon = function NavbarNotificationIcon({
  children,
  ...restProps
}) {
  return (
    <NotificationIcon src="images/icons/notification.png" {...restProps} />
  );
};

Navbar.Search = function NavbarSearch({...restProps}) {
  const [searchActive, setSearchActive] = useState();
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setSearchActive(false);
    }
  };

  const handleClickInside = () => setSearchActive(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <Search
      {...restProps}
      active={searchActive}
      ref={myRef}
      onClick={handleClickInside}
    >
      <SearchIcon>
        <img src="./images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput placeholder="Title, People, Genres" active={searchActive} />
    </Search>
  );
};
