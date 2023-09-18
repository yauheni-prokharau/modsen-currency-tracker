import styled from "styled-components";

export const ErrorBoundaryWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Poppins;
  color: ${({ theme }) => theme.colors.white};
`;

export const ErrorBoundaryMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.pixels.px20};
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.pixels.px10};
  width: ${({ theme }) => theme.pixels.px300};
  height: ${({ theme }) => theme.pixels.px300};

  h1,
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
`;
