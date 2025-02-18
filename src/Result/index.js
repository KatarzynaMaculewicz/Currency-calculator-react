import { Div, Span } from "./styled";

const Result = ({ result }) => {
  return (
    <Div>
      <p>
        RESULT: {(+result).toFixed(2)}
        <Span></Span>
      </p>
    </Div>
  );
};

export default Result;
