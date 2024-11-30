import "./style.css";
import { useState, useEffect } from "react";

const CurrentDate = ({ date }) => {
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  date = newDate.toLocaleString(undefined, { 
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  return (
      <p className="form__date">
        {date}
      </p>
  );
};

export default CurrentDate;