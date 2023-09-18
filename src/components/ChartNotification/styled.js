import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.pixels.px10};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});
  z-index: 999;
`;
