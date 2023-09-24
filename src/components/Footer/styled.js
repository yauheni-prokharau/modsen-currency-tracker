import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: ${({ theme }) => theme.pixels.px1300};
  margin: ${({ theme }) => theme.pixels.px50} auto;
`;

export const FooterWrapper = styled.section`
  padding: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px20};
  display: flex;
  flex-direction: row;

  @media (mix-width: ${({ theme }) => theme.pixels.px1300}) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => theme.pixels.px0}
      ${({ theme }) => theme.pixels.px120};
  }

  @media (max-width: ${({ theme }) => theme.pixels.px700}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.div`
  width: ${({ theme }) => theme.pixels.px500};

  @media (max-width: ${({ theme }) => theme.pixels.px1300}) {
    &:first-child {
      margin-left: ${({ theme }) => theme.pixels.px100};
    }

    &:last-child {
      margin-right: ${({ theme }) => theme.pixels.px100};
    }
  }

  @media (max-width: ${({ theme }) => theme.pixels.px700}) {
    margin: ${({ theme }) => theme.pixels.px0} auto;
    width: ${({ theme }) => theme.pixels.px300};

    &:first-child {
      margin: ${({ theme }) => theme.pixels.px0} auto;
    }

    &:last-child {
      margin: ${({ theme }) => theme.pixels.px0} auto;
    }
  }
`;

export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.pixels.px20};

  img {
    margin-right: ${({ theme }) => theme.pixels.px10};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(
      92deg,
      rgba(0, 206, 44, 1) 0%,
      rgba(174, 223, 35, 1) 49.26%,
      rgba(163, 220, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.transparent};
  }

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    margin-bottom: ${({ theme }) => theme.pixels.px0};
  }
`;

export const Quote = styled.div`
  width: 100%;

  p {
    font-family: Poppins;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${({ theme }) => theme.pixels.px20};
  text-align: center;

  > div {
    margin: ${({ theme }) => theme.pixels.px30};
  }

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    flex-direction: row;
    gap: 0;
    margin-top: ${({ theme }) => theme.pixels.px0};
  }
`;

export const MainLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

export const FooterCopyright = styled.p`
  height: ${({ theme }) => theme.pixels.px36};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin: ${({ theme }) => theme.pixels.px50} auto;
`;
