import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.pixels.px70};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    225deg,
    rgba(18, 44, 19, 1) 0%,
    rgba(36, 121, 64, 0) 100%
  );

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${({ theme }) => theme.pixels.px260};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: transparent;
  margin-bottom: ${({ theme }) => theme.pixels.px20};

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    text-align: right;
    margin-bottom: ${({ theme }) => theme.pixels.px0};
  }
`;

export const Quote = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: 300;
  line-height: 47px;
  margin-bottom: ${({ theme }) => theme.pixels.px20};
  background-color: transparent;

  @media (min-width: ${({ theme }) => theme.pixels.px768}) {
    width: auto;
    text-align: right;
    margin-bottom: ${({ theme }) => theme.pixels.px0};
  }
`;

export const Title = styled.p`
  width: 100%;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
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

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    width: auto;
  }
`;

export const DiagramWrapper = styled.div`
  margin-left: ${({ theme }) => theme.pixels.px0};
  background-color: ${({ theme }) => theme.colors.transparent};

  img {
    background-color: ${({ theme }) => theme.colors.transparent};
    max-width: 100%;
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.pixels.px1300}) {
    width: ${({ theme }) => theme.pixels.px300};
    height: ${({ theme }) => theme.pixels.px345};
    margin-left: ${({ theme }) => theme.pixels.px30};
    margin: ${({ theme }) => theme.pixels.px0} auto;
  }
`;
