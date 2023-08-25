import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  height: 103px;
  padding: 0px 100px;
`;

export const DiagramWrapper = styled.div`
  img {
    max-height: 40px;
    width: 40px;
    height: 41.19px;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 657px;
  list-style-type: none;

  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 41.143px;
    margin: 10px;
    text-decoration: none;
    position: relative;
    border-bottom: 2px solid transparent;
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
  width: 36px;
  height: 14px;
  background: linear-gradient(
    92deg,
    rgba(0, 206, 44, 1) 0%,
    rgba(174, 223, 35, 1) 49.26%,
    rgba(163, 220, 0, 1) 100%
  );
  border-radius: 7px;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
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
