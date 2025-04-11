import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 60%;
  margin: 0 auto;
  margin-top: 5%;
`;

export const Legend = styled.legend`
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  border-radius: 10px;
`;

export const StyledParagraph = styled.p`
  color: gray;
  text-align: right;
  margin-bottom: 0px;
  margin-right: 20%;
  font-size: 80%;
`;

export const Fieldset = styled.fieldset`
  color: gray;
  background-color: rgb(250, 249, 249);
  border-style: none;
  border-radius: 10px;
  box-shadow: 2px 4px 24px 2px rgba(129, 126, 126, 0.79);
`;

export const Label = styled.label`
  width: 150px;
  display: inline-block;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    text-align: center;
  }
`;

export const Select = styled.select`
  color: gray;
  background-color: #e0ebeb;
  padding: 5px;
  border-radius: 10px;
  width: 40%;
  text-align: center;
  margin: 0, auto;

  &:hover {
    cursor: pointer;
    background-color: #edf7f7;
    font-weight: bold;
  }

  &:active {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 90%;
    align-self: center;
  }
`;

export const Input = styled.input`
  color: gray;
  background-color: #e0ebeb;
  padding: 7px;
  border-radius: 10px;
  width: 40%;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #edf7f7;
    font-weight: bold;
  }

  &:active {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 90%;
    align-self: center;
  }
`;

export const Container = styled.p`
  margin: 16px, 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const CalculateButton = styled.button`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
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
