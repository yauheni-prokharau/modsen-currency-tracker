import React from "react";
import { Link } from "react-router-dom";

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
          const { id, name, path } = item;
          return (
            <li key={id}>
              <Link to={path}>{name}</Link>
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
