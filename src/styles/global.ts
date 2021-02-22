import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #fff;
    color: rgba(25, 20, 20, 0.8);
  }

  body, button {
    font-family: 'Mulish', sans-serif;
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
  }
`;
