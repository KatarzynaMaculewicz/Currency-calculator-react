import styled from "styled-components";

export const ResetButtonContainer = styled.div`
  width: 80%;
  margin: 10px auto;
`;

export const Button = styled.button`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 24px 2px rgba(129, 126, 126, 0.79);

  &:hover {
    background-color:${({ theme }) => theme.colors.actionColor};
    transform: scale(1.01);
    font-weight: bold;
    cursor: pointer;
  }

  &:active {
    transform: scale(1);
    background-color:${({ theme }) => theme.colors.actionColor};
    cursor: pointer;
  }
`;
