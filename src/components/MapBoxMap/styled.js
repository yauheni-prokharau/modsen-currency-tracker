import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.pixels.px20};
`;

export const StyledInput = styled.input`
  background: rgba(27, 32, 40, 1);
  width: ${({ theme }) => theme.pixels.px450};
  height: ${({ theme }) => theme.pixels.px65};
  padding: ${({ theme }) => theme.pixels.px10};
  padding-left: ${({ theme }) => theme.pixels.px20};
  border: ${({ theme }) => theme.pixels.px1} solid
    ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.pixels.px10};
  box-shadow: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px2} ${({ theme }) => theme.pixels.px4}
    ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  outline: none;
  margin-bottom: ${({ theme }) => theme.pixels.px40};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledList = styled.ul`
  position: absolute;
  z-index: 1;
  top: calc(80%);
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.pixels.px4};
  box-shadow: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px2} ${({ theme }) => theme.pixels.px4}
    ${({ theme }) => theme.colors.lightGrey};
  list-style: none;
  padding: ${({ theme }) => theme.pixels.px0};
  max-height: ${({ theme }) => theme.pixels.px200};
  overflow-y: auto;
  width: ${({ theme }) => theme.pixels.px450};
`;

export const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.pixels.px8};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.pixels.px400};
`;
