import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;
