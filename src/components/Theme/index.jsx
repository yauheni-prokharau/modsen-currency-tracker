import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { themes } from "@theme";
import { Global } from "@components/App/styled";
import { toggleTheme } from "@store/reducers/themeSlice";

const Theme = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const selectedTheme = themes[theme];

  useEffect(() => {
    dispatch(toggleTheme(selectedTheme));
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
