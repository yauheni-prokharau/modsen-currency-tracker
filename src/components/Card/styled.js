import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.pixels.px520};
  height: ${({ theme }) => theme.pixels.px150};
  padding: ${({ theme }) => theme.pixels.px30}
    ${({ theme }) => theme.pixels.px100} ${({ theme }) => theme.pixels.px30}
    ${({ theme }) => theme.pixels.px30};
  align-items: center;
  gap: ${({ theme }) => theme.pixels.px30};
  border-radius: ${({ theme }) => theme.pixels.px8};
  border: ${({ theme }) => theme.pixels.px1} solid
    ${({ theme }) => theme.colors.smoke};
  background: ${({ theme }) => theme.background};
  margin: ${({ theme }) => theme.pixels.px20};
  cursor: pointer;
  transition:
    border-radius 0.2s,
    box-shadow 0.3s;

  &:hover {
    border-radius: ${({ theme }) => theme.pixels.px15};
    box-shadow: ${({ theme }) => theme.pixels.px0}
      ${({ theme }) => theme.pixels.px0} ${({ theme }) => theme.pixels.px50}
      rgba(71, 71, 71, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.pixels.px1400}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.pixels.px80};
  height: ${({ theme }) => theme.pixels.px80};
  border-radius: ${({ theme }) => theme.pixels.px8};
  background-color: ${(props) => props.color};
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.pixels.px280};
  color: ${({ theme }) => theme.colors.whiteSmoke};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-style: normal;
  font-weight: 400;
  line-height: 49px;
  background-color: ${({ theme }) => theme.colors.transparent};

  @media (max-width: ${({ theme }) => theme.pixels.px768}) {
    display: block;
  }
`;

export const Percent = styled.span`
  width: ${({ theme }) => theme.pixels.px100};
  color: ${({ theme }) => theme.colors.blueSmoke};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-style: normal;
  font-weight: 300;
  line-height: 41px;
  background-color: ${({ theme }) => theme.colors.transparent};
`;
