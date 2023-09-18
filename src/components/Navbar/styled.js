import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.pixels.px100};
  padding: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px100};
`;

export const DiagramWrapper = styled.div`
  img {
    max-height: ${({ theme }) => theme.pixels.px40};
    width: ${({ theme }) => theme.pixels.px40};
    height: ${({ theme }) => theme.pixels.px40};
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: ${({ theme }) => theme.pixels.px657};
  list-style-type: none;

  a {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: 300;
    line-height: ${({ theme }) => theme.pixels.px40};
    margin: ${({ theme }) => theme.pixels.px10};
    text-decoration: none;
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.colors.transparent};
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.color};
    }
  }
`;

export const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.pixels.px36};
  height: ${({ theme }) => theme.pixels.px14};
  background: linear-gradient(
    92deg,
    rgba(0, 206, 44, 1) 0%,
    rgba(174, 223, 35, 1) 49.26%,
    rgba(163, 220, 0, 1) 100%
  );
  border-radius: ${({ theme }) => theme.pixels.px7};
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    width: ${({ theme }) => theme.pixels.px20};
    height: ${({ theme }) => theme.pixels.px20};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color};
    left: 0;
    top: -3px;
    transition: transform 0.3s ease;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
    background: linear-gradient(
      92deg,
      rgba(0, 206, 44, 1) 0%,
      rgba(174, 223, 35, 1) 49.26%,
      rgba(163, 220, 0, 1) 100%
    );

    &:before {
      transform: translateX(22px);
    }
  }
`;
