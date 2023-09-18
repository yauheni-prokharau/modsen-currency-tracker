import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Spinner = styled.div`
  border: ${({ theme }) => theme.pixels.px4} solid
    ${({ theme }) => theme.colors.whiteLoader};
  border-radius: 50%;
  border-top: ${({ theme }) => theme.pixels.px4} solid
    ${({ theme }) => theme.colors.lightGreen};
  width: ${({ theme }) => theme.pixels.px50};
  height: ${({ theme }) => theme.pixels.px50};

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
