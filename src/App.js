import Form from "./Form";
import { useState } from "react";

function App({ date }) {
  const [newDate, setNewDate] = useState(new Date());

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
