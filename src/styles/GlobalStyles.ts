import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
  }
`;
