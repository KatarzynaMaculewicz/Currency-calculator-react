import styled from "styled-components";

export const StyledDate = styled.p`
  margin-top: -15px;
  text-align: right;
  font-size: small;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 0px;
    text-align: center;
  }
`;