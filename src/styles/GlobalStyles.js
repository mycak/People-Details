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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Modal {
    position: absolute;
    background-color: #fff;
    padding: 30px 20px;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-radius: 40px;
    outline: none;
    border: solid 1px rgb(75, 89, 123, 0.4);
    border-radius: 15px;
    box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
    &::before {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 7px 0 0 7px;
    background: linear-gradient(0deg, #7176f7 0%, #ca75f1 100%);
  }
  }
`;

export default GlobalStyles;
