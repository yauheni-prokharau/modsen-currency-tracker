import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: rgba(32, 32, 37, 1);
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  * {
    margin: 10px;
    padding: 10px;
    background: rgba(32, 32, 37, 1);
    border-radius: 10px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: rgba(217, 217, 217, 1);
  transition: color 0.2s;

  &:hover {
    color: rgba(250, 250, 250, 1);
  }
`;
