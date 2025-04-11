import Form from "./Form";
import { ThemeProvider } from "styled-components";
import { theme } from './theme.js'

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
