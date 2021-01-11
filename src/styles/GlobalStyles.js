import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --base: #4B597B;
  }
  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }
  html {
    color: var(--base);
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }
  p{
    padding: 0;
    margin: 0;
  }
  .vertical-flex-align{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export default GlobalStyles;
