import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #1c1c1e;
    --text-color: #ecf0f1;
    --heading-font: 'Poppins', sans-serif;
    --body-font: 'Roboto', sans-serif;
    --transition-speed: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--body-font);
    transition: var(--transition-speed) ease-in-out;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease-in-out;
  }

  a:hover {
    color: var(--secondary-color);
  }
`;

export default GlobalStyle;
