import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: ${({ theme }) => theme.pixels.px0};
    padding: ${({ theme }) => theme.pixels.px0};
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;
