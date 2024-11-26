import "./style.css";

const Result = ({ result }) => {
  return (
    <div className="form__div">
      <p>
        RESULT: {(+result).toFixed(2)}
        <span className="form__result"></span>
      </p>
    </div>
  );
};

export default Result;
