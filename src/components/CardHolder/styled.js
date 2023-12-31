import styled from "styled-components";

export const CardHolderContainer = styled.section`
  max-width: ${({ theme }) => theme.pixels.px1600};
  margin: ${({ theme }) => theme.pixels.px50} auto;
`;

export const CardHolderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.pixels.px0}
    ${({ theme }) => theme.pixels.px120};
  margin-bottom: ${({ theme }) => theme.pixels.px40};

  @media (max-width: ${({ theme }) => theme.pixels.px768}) {
    padding: ${({ theme }) => theme.pixels.px0};
  }
`;

export const CardHolderTextWrapper = styled.div`
  margin-left: ${({ theme }) => theme.pixels.px150};
  margin-bottom: ${({ theme }) => theme.pixels.px20};
`;

export const CardHolderText = styled.p`
  width: ${({ theme }) => theme.pixels.px520};
  height: ${({ theme }) => theme.pixels.px40};
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-style: normal;
  font-weight: 300;
  line-height: ${({ theme }) => theme.pixels.px40};
  margin-bottom: ${({ theme }) => theme.pixels.px20};
  padding-bottom: ${({ theme }) => theme.pixels.px20};
  border-bottom: ${({ theme }) => theme.pixels.px2} solid
    ${({ theme }) => theme.colors.smoke};

  @media (max-width: ${({ theme }) => theme.pixels.px768}) {
    border-bottom: none;
    width: 100%;
  }
`;

export const CardHolderStrip = styled.div`
  width: ${({ theme }) => theme.pixels.px520};
  width: 10%;
  height: ${({ theme }) => theme.pixels.px2};
  background-color: ${({ theme }) => theme.colors.smoke};
`;
