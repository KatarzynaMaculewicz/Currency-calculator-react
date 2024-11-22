import "./style.css";

const Result = ({ result }) => {
  return (
    <div className="form__div">
      <p>
        RESULT: {result}
        <span className="form__result"></span>
      </p>
    </div>
  );
};

export default Result;
