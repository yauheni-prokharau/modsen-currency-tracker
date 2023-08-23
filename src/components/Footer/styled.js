import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1600px;
  margin: 50px auto;
`;

export const FooterWrapper = styled.section`
  padding: 0px 120px;
  display: flex;
  justify-content: space-between;
`;

export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 10px;
  }

  p {
    font-size: 26px;
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
  }
`;

export const Quote = styled.div`
  width: 482px;
  height: 227.577px;

  p {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  span {
    font-size: 28px;
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
    color: rgba(137, 137, 137, 1);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: rgba(137, 137, 137, 1);
    }
  }
`;

export const FooterCopyright = styled.div`
  width: 508px;
  height: 37.164px;
  color: rgba(137, 137, 137, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin: 50px auto;
`;
