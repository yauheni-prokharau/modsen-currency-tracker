import styled from "styled-components";

export const ErrorBoundaryWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Poppins;
  color: rgba(255, 255, 255, 1);
`;

export const ErrorBoundaryMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: rgba(3, 3, 4, 1);
  border: 1px solid rgb(124, 57, 187);
  border-radius: 10px;
  width: 300px;
  height: 300px;

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
    -webkit-text-fill-color: transparent;
  }
`;
