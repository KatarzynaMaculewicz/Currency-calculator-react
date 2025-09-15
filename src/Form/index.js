import { useCurrencies } from "./useCurrencies";
import { useState } from "react";
import Result from "../Result";
import ResetButton from "../ResetButton";
import CurrentDate from "../CurrentDate";
import { Input, Label, StyledForm, Fieldset, StyledParagraph, Legend, Select, Container, CalculateButton, Wrapper } from "./styled";
import loadingIcon from "../images/loading.gif";

const Form = () => {
  const { rates, loading, error } = useCurrencies();
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(amount, fromCurrency, toCurrency);
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setFromCurrency(0);
    setToCurrency(0);
    setAmount("");
    setResult(0);
  };

  const calculateResult = (amount, fromCurrency, toCurrency) => {
    const calculationResult = (amount / fromCurrency) * toCurrency;
    setResult(`${calculationResult}`);
  };

return (
  loading ? (
    <Wrapper>
      <p>🚀 Currency data incoming! We’ll be ready in no time 🚀</p>
      <img src={loadingIcon} alt="loading icon"/>
    </Wrapper>)
  : error ? (
    <Wrapper error>
      <p>{error}</p>
    </Wrapper>)
  : (
    <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
        <StyledParagraph>* field required</StyledParagraph>
        <Fieldset>
          <Legend>Currency converter</Legend>
          <CurrentDate />
          <Container>
            <Label>From:</Label>
            <Select
              name="fromCurrency"
              value={fromCurrency}
              onChange={(event) => setFromCurrency(+event.target.value)}
            >
              {rates.map((currency) => (
                <option key={currency.id} value={currency.rate}>
                  {currency.name}
                </option>
              ))}
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
              onChange={(event) => setToCurrency(+event.target.value)}
            >
              {rates.map((currency) => (
                <option key={currency.id} value={currency.rate}>
                  {currency.name}
                </option>
              ))}
            </Select>
          </Container>
        </Fieldset>
        <CalculateButton>CALCULATE</CalculateButton>
        <Result result={result} />
        <ResetButton />
      </StyledForm>
    )
  );
};

export default Form;
