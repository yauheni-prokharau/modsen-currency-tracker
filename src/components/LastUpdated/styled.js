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
  margin: 50px 0px;
`;

export const Text = styled.p`
  width: 417px;
  height: 37px;
  font-size: 32.914px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  margin-left: 10px;
`;
