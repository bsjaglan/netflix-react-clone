import React from "react";
import navOptions from "../../data/navOptions.json";
import {HoverDropdown, Navbar} from "../../components";

function NavDropdownContainer({clicked, setClicked}) {
  return (
    <HoverDropdown>
      {/* rander selected item  */}
      <HoverDropdown.SelectedItem>
        {navOptions.map(
          (item) =>
            item.id === clicked && (
              <Navbar.TextLink className="active" key={item.id}>
                {item.text}
              </Navbar.TextLink>
            )
        )}
      </HoverDropdown.SelectedItem>

      {/* rander unselected items in OptionList as item */}
      <HoverDropdown.OptionsList
        arrowLeftPosition="115px"
        top="10px"
        left="-113px"
      >
        {navOptions.map((item) => (
          <HoverDropdown.Item style={{justifyContent: "center"}}>
            <Navbar.TextLink
              key={item.id}
              onClick={() => setClicked(item.id)}
              className={clicked === item.id && "active"}
            >
              {item.text}
            </Navbar.TextLink>
          </HoverDropdown.Item>
        ))}
      </HoverDropdown.OptionsList>
    </HoverDropdown>
  );
}

export default NavDropdownContainer;
