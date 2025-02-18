import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
import ResetButton from "../ResetButton";
import CalculateButton from "../CalculateButton";
import CurrentDate from "../CurrentDate";
import { Input, Label, StyledForm, Fieldset, StyledParagraph, InputParagraph, Legend, Select, Container } from "./styled";

const Form = () => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0].rate);
  const [toCurrency, setToCurrency] = useState(currencies[0].rate);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(amount, fromCurrency, toCurrency);
  };

  const calculateResult = (amount, fromCurrency, toCurrency) => {
    const calculationResult = (amount / fromCurrency) * toCurrency;
    setResult(`${calculationResult}`);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledParagraph> * field required </StyledParagraph>
      <Fieldset>
        <Legend>Currency conwenter</Legend>
        <CurrentDate />
        <Container>
          <Label>From:</Label>
          <Select
            name="fromCurrency"
            value={fromCurrency}
            onChange={(event) => setFromCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.rate} value={currency.rate}>
                {currency.name}
              </option>
            ))}
            ;
          </Select>
        </Container>
        <Container>
          <Label>Amount*:</Label>
          <Input
            type="number"
            name="amount"
            min="0"
            step="1"
            required
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </Container>
        <Container>
          <Label>To:</Label>
          <Select
            name="toCurrency"
            value={toCurrency}
            onChange={(event) => setToCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.rate} value={currency.rate}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Container>
      </Fieldset>
      <CalculateButton />
      <Result 
        result={result} 
      />
      <ResetButton />
    </StyledForm>
  );
};

export default Form;
