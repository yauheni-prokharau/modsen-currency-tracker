import styled from "styled-components";

export const CurrencyButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 520px;
  height: ${({ theme }) => theme.pixels.px100};
  padding: ${({ theme }) => theme.pixels.px30}
    ${({ theme }) => theme.pixels.px100} ${({ theme }) => theme.pixels.px30}
    ${({ theme }) => theme.pixels.px30};
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.smoke};
  background: ${({ theme }) => theme.background};
  margin: 20px;
  cursor: pointer;
  transition:
    border-radius 0.2s,
    box-shadow 0.3s;

  &:hover {
    border-radius: ${({ theme }) => theme.pixels.px15};
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.smoke};
  }

  > span {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const ChartSection = styled.section`
  padding: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px100};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonImage = styled.img`
  width: ${({ theme }) => theme.pixels.px80};
  height: ${({ theme }) => theme.pixels.px80};
  border-radius: ${({ theme }) => theme.pixels.px8};
  background-color: ${(props) => props.color};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-evently;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.pixels.px20};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px0} ${({ theme }) => theme.pixels.px10}
    rgba(0, 0, 0, 0.3);
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.pixels.px20};
  }

  input {
    margin-bottom: ${({ theme }) => theme.pixels.px10};
  }

  button {
    margin: ${({ theme }) => theme.pixels.px10};
    padding: ${({ theme }) => theme.pixels.px8}
      ${({ theme }) => theme.pixels.px16};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.pixels.px10};
  }

  h2,
  button {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.whiteSmoke};
  }
`;
