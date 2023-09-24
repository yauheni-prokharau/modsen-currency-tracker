import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const CircleWrapper = styled.img`
  background-color: transparent;
  animation: ${breatheAnimation} 3s ease-in-out infinite;
`;

export const TimeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.pixels.px50} ${({ theme }) => theme.pixels.px0};
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.pixels.px400};
  height: ${({ theme }) => theme.pixels.px40};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-style: normal;
  font-weight: 300;
  line-height: ${({ theme }) => theme.pixels.px40};
  margin-left: ${({ theme }) => theme.pixels.px10};
`;
