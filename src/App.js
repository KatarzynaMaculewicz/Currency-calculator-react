import Form from "./Form";
import { useState, useEffect } from "react";

function App({ date }) {
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
    <div>
      <Form />
      <p>{ date }</p>
    </div>
  );
}

export default App;
