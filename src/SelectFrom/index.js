import "./style.css";

const SelectFrom = () => (
  <div>
    <label className="form__label">From:</label>
    <select className="form__select" name="fromCurrency">
      <option value="gbp" selected>
        GBP
      </option>
      <option value="eur">EUR</option>
      <option value="usd">USD</option>
      <option value="pln">PLN</option>
    </select>
  </div>
);

export default SelectFrom;
