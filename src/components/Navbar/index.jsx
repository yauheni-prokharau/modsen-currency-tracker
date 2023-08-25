import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import diagram from "@assets/images/diagram.svg";
import { navbarItems } from "@constants";
import { toggleTheme } from "@store/reducers/themeSlice";

import {
  NavbarWrapper,
  DiagramWrapper,
  ListWrapper,
  ToggleWrapper,
  ToggleInput,
  ToggleSlider,
} from "./styled";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

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
        <ToggleInput type="checkbox" onClick={handleThemeToggle} />
        <ToggleSlider />
      </ToggleWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
