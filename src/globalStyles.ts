import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    background: #f1fbfb;
    width: 100vw;
  }
  *,::before,::after{
    padding: 0;
    margin: 0;
  }
`;
 
export default GlobalStyle;