import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  word-break: break-word;
  background-color: rgb(250, 249, 249);
  border-style: none;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;
  box-shadow: 2px 4px 24px 2px rgba(129, 126, 126, 0.79);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 900;
  font-size: 24px;
  text-align: center;
`;
