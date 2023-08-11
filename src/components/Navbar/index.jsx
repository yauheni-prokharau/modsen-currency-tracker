import React from "react";

import diagram from "@assets/images/diagram.svg";
import toogle from "@assets/images/toggle.png";
import { navbarItems } from "@constants";

import {
  NavbarWrapper,
  DiagramWrapper,
  ListWrapper,
  ToggleWrapper,
} from "./styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <DiagramWrapper>
        <img src={diagram} alt="diagram" />
      </DiagramWrapper>
      <ListWrapper>
        {navbarItems.map((item) => {
          const { id, name } = item;
          return (
            <li key={id}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ListWrapper>
      <ToggleWrapper>
        <img src={toogle} alt="toogle" />
      </ToggleWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
