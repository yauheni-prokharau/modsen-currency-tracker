import styled from "styled-components";

export const CurrencyButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 520px;
  height: 100px;
  padding: 30px 100px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid rgba(71, 71, 71, 1);
  background: ${({ theme }) => theme.background};
  margin: 20px;
  cursor: pointer;
  transition:
    border-radius 0.2s,
    box-shadow 0.3s;

  &:hover {
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(71, 71, 71, 0.5);
  }

  > span {
    font-size: 50px;
  }
`;

export const ChartSection = styled.section`
  padding: 0px 100px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evently;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: rgba(32, 32, 37, 1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    margin: 10px;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 10px;
  }

  h2,
  button {
    background: rgba(32, 32, 37, 1);
    color: rgba(217, 217, 217, 1);
  }
`;
