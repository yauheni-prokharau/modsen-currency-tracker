import styled from "styled-components";

export const PlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h2 {
    background: linear-gradient(
      92deg,
      rgba(0, 206, 44, 1) 0%,
      rgba(174, 223, 35, 1) 49.26%,
      rgba(163, 220, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.transparent};
  }

  h2,
  p {
    margin: ${({ theme }) => theme.pixels.px10};
  }
  a {
    text-decoration: none;
    border-bottom: ${({ theme }) => theme.pixels.px2} solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;
