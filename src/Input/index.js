import "./style.css";

const Input = () => (
  <p>
    <label className="form__label">Amount*:</label>
    <input
      className="form__input"
      type="number"
      name="amount"
      min="0"
      step="1"
      required
    />
  </p>
);

export default Input;
