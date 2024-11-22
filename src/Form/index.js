import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
import ResetButton from "../ResetButton";
import CalculateButton from "../CalculateButton";

const Form = () => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0].rate);
  const [toCurrency, setToCurrency] = useState(currencies[0].rate);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <p className="form__required"> * field required </p>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency conwenter</legend>
        <div>
          <label className="form__label">From: {fromCurrency}</label>
          <select
            className="form__select"
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
          </select>
        </div>
        <p>
          <label className="form__label">Amount*: {amount}</label>
          <input
            className="form__input"
            type="number"
            name="amount"
            min="0"
            step="1"
            required
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </p>
        <p>
          <label className="form__label">To: {toCurrency}</label>
          <select
            className="form__select"
            name="toCurrency"
            value={toCurrency}
            onChange={(event) => setToCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.rate} value={currency.rate}>
                {currency.name}
              </option>
            ))}
          </select>
        </p>
      </fieldset>
      <CalculateButton />
      <Result />
      <ResetButton />
    </form>
  );
};

export default Form;
