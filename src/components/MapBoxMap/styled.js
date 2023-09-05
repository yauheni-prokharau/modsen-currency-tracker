import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  background: rgba(27, 32, 40, 1);
  width: 450px;
  height: 65.5px;
  padding: 10px;
  padding-left: 20px;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  outline: none;
  margin-bottom: 40px;
  color: rgba(158, 158, 158, 1);
`;

export const StyledList = styled.ul`
  position: absolute;
  z-index: 1;
  top: calc(80%);
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
`;

export const StyledListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.9);
  background: rgba(27, 32, 40, 1);
  color: rgba(158, 158, 158, 1);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
