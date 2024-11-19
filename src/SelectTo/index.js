const SelectTo = () => (
  <p>
    <label className="form__label">To:</label>
    <select className="form__select" name="toCurrency">
      <option value="gbp" selected>
        GBP
      </option>
      <option value="eur">EUR</option>
      <option value="usd">USD</option>
      <option value="pln">PLN</option>
    </select>
  </p>
);

export default SelectTo;
