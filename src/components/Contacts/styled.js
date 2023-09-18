import styled from "styled-components";

export const ContactsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: ${({ theme }) => theme.pixels.px10};
  }
`;
