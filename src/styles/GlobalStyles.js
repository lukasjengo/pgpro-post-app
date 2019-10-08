import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${variables.colorBlack};
    padding: 4rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 3px;
    font: inherit;
    color: inherit;
    background-color: transparent;

    cursor: pointer;
  }
`;

export default GlobalStyles;
