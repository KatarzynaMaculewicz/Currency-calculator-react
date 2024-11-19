import Input from "./Input";
import SelectFrom from "./SelectFrom";
import SelectTo from "./SelectTo";
import Result from "./Result";
import ResetButton from "./ResetButton";
import CalculateButton from "./CalculateButton";

const rates = [
  { id: 0, currency: "", rate: 0.0 },
  { id: 1, currency: "GBP", rate: 1 },
  { id: 2, currency: "EUR", rate: 1.19 },
  { id: 3, currency: "USD", rate: 1.3 },
  { id: 4, currency: "PLN", rate: 5.13 },
];

function App() {
  return (
    <form className="form">
      <p className="form__required"> * field required</p>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency conwenter</legend>
        <SelectFrom />
        <Input />
        <SelectTo />
      </fieldset>
      <CalculateButton />
      <Result />
      <ResetButton />
    </form>
  );
}

export default App;
