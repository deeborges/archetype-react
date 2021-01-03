import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, html {
    margin: 0;
    font-size: 62.5%;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;

    strong {
      color: #ffc107;
    }
  }
`;
