import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 520px;
  height: 152.5px;
  padding: 30px 100px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid rgba(71, 71, 71, 1);
  background: ${({ theme }) => theme.background};
  margin: 20px;
  cursor: pointer;
  transition:
    border-radius 0.2s,
    box-shadow 0.3s;

  &:hover {
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(71, 71, 71, 0.5);
  }

  @media (max-width: 1600px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: block;
  background-color: transparent;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;

export const CardText = styled.p`
  width: 279.287px;
  color: rgba(217, 217, 217, 1);
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;
  background-color: transparent;
`;

export const CardPercent = styled.span`
  width: 113.259px;
  color: rgba(167, 178, 195, 1);
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  background-color: transparent;
`;
