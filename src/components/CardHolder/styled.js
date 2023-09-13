import styled from "styled-components";

export const CardHolderContainer = styled.section`
  max-width: 1600px;
  margin: 50px auto;
`;

export const CardHolderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 120px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const CardHolderTextWrapper = styled.div`
  margin-left: 150px;
  margin-bottom: 20px;
`;

export const CardHolderText = styled.p`
  width: 520px;
  height: 43px;
  color: ${({ theme }) => theme.color};
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(71, 71, 71, 1);

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const CardHolderStrip = styled.div`
  width: 520px;
  width: 10%;
  height: 2px;
  background-color: rgba(71, 71, 71, 1);
`;
