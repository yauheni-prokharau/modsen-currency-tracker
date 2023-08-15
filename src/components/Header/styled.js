import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 461.027px;
  padding: 70px;
  padding-left: 260px;
  display: flex;
  background: linear-gradient(
    225deg,
    rgba(18, 44, 19, 1) 0%,
    rgba(36, 121, 64, 0) 100%
  );
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const Quote = styled.p`
  width: 389px;
  height: 107px;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 46.772px;
  margin-left: 360px;
  background-color: transparent;
`;

export const Title = styled.p`
  width: 691.227px;
  height: 124.606px;
  flex-shrink: 0;
  text-align: right;
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
`;

export const DiagramWrapper = styled.div`
  width: 303.699px;
  height: 345.712px;
  margin-left: 30px;
  background-color: transparent;

  img {
    background-color: transparent;
  }
`;
