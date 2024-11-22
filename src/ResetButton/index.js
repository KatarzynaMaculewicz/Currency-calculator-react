import "./style.css";

const ResetButton = () => {
  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="form__buttonDiv">
      <button
        className="form__resetButton"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
