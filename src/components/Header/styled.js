import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    225deg,
    rgba(18, 44, 19, 1) 0%,
    rgba(36, 121, 64, 0) 100%
  );

  @media (min-width: 1300px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 260px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: transparent;
  margin-bottom: 20px;

  @media (min-width: 1300px) {
    text-align: right;
    margin-bottom: 0;
  }
`;

export const Quote = styled.p`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 46.772px;
  margin-bottom: 20px;
  background-color: transparent;

  @media (min-width: 768px) {
    width: auto;
    text-align: right;
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  width: 100%;
  flex-shrink: 0;
  font-size: 76px;
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
  -webkit-text-fill-color: transparent;

  @media (min-width: 1300px) {
    width: auto;
  }
`;

export const DiagramWrapper = styled.div`
  margin-left: 0;
  background-color: transparent;

  img {
    background-color: transparent;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 1300px) {
    width: 303.699px;
    height: 345.712px;
    margin-left: 30px;
    margin: 0 auto;
  }
`;
