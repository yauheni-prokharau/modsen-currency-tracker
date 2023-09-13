import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 128, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});
  z-index: 999;
`;
