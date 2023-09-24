import React, { useEffect } from "react";
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

  useEffect(() => {
    const storedToggleValue = localStorage.getItem("themeToggle");
    if (storedToggleValue) {
      document.querySelector("#themeToggle").checked =
        JSON.parse(storedToggleValue);
    }
  }, []);

  const handleThemeToggle = () => {
    const isToggleChecked = document.querySelector("#themeToggle").checked;
    localStorage.setItem("themeToggle", isToggleChecked);
    dispatch(toggleTheme());
  };

  return (
    <NavbarWrapper data-cy="navbar">
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
      <ToggleWrapper data-cy="toggleTheme">
        <ToggleInput
          id="themeToggle"
          type="checkbox"
          onClick={handleThemeToggle}
        />
        <ToggleSlider />
      </ToggleWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
