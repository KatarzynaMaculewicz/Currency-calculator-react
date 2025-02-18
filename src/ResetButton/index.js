import { Button, Div } from "./styled";

const ResetButton = () => {
  const reset = () => {
    window.location.reload();
  };

  return (
    <Div>
      <Button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        RESET
      </Button>
    </Div>
  );
};

export default ResetButton;
