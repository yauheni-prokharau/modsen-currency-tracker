import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@theme";

import { Global } from "@components/App/styled";

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
