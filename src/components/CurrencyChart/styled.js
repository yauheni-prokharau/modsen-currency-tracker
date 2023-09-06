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
