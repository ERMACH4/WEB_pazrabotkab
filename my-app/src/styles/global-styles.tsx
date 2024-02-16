import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', sans-serif;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor}; // 
    transition: background-color 0.3s, color 0.3s;
  }
`;
