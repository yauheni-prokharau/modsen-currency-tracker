import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background:  ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.pixels.px50};
  border-radius: ${({ theme }) => theme.pixels.px8};
  box-shadow: ${({ theme }) => theme.pixels.px0} ${({ theme }) =>
    theme.pixels.px2} ${({ theme }) => theme.pixels.px4} ${({ theme }) =>
    theme.colors.grey};
  position: relative;
  width: ${({ theme }) => theme.pixels.px600}; 
  height: ${({ theme }) => theme.pixels.px345};

  color: ${({ theme }) => theme.colors.white};

  * {
    margin: ${({ theme }) => theme.pixels.px10};
    padding: ${({ theme }) => theme.pixels.px10};
    background: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.pixels.px10};
    color:  ${({ theme }) => theme.colors.white};
  }
};`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.whiteSmoke};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.whiteHover};
  }
`;
