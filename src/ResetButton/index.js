import { Button, ResetButtonContainer } from "./styled";

const ResetButton = () => {
  const reset = () => {
    window.location.reload();
  };

  return (
    <ResetButtonContainer>
      <Button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        RESET
      </Button>
    </ResetButtonContainer>
  );
};

export default ResetButton;
