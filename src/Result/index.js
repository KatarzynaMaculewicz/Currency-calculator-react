import { ResultContainer, Span } from "./styled";

const Result = ({ result }) => {
  return (
    <ResultContainer>
      <p>
        RESULT: {(+result).toFixed(2)}
        <Span></Span>
      </p>
    </ResultContainer>
  );
};

export default Result;
