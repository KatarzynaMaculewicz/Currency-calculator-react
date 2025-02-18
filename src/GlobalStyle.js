import { createGlobalStyle } from "styled-components";
import background from "../src/images/background-image.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Kode Mono', monospace;
    font-weight: 400;
    font-style: normal;
    margin: 0 auto;
    background-image: url("${background}");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;