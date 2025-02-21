import { useCurrentDate } from "./useCurrentDate";
import { Paragraph } from "./styled";

const formatDate = (newDate) =>
  newDate.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const CurrentDate = ({ newDate }) => {
  newDate = useCurrentDate();

  return (
    <>
      <Paragraph>
        {formatDate(newDate)}
      </Paragraph>
    </>
  );
};

export default CurrentDate;
