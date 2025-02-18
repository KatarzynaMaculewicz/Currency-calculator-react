import Form from "./Form";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "teal",
    actionColor: "#01aaaa",
  },
  breakpoints: {
    mobile: 767,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
