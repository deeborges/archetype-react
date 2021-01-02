import { createGlobalStyle } from 'styled-components';
// buscar no archetype-system as fonts do tema e inserir como fontface global da aplicaco
export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-size: 62.5%;
    position: relative;
  }
`;
