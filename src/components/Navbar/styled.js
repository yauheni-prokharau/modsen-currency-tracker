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
      border-color: rgba(255, 255, 255, 1);
    }
  }
`;

export const ToggleWrapper = styled.div`
  img {
    max-height: 60px;
  }
`;
