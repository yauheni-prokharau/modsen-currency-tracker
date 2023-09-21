import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { themes } from "@theme";
import { Global } from "@components/App/styled";

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  const selectedTheme = themes[theme];

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
