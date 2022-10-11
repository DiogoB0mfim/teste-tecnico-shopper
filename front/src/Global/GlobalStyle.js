import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    scrollbar-width: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Courier New', Courier, monospace;
  }

  .toast-message {
    font-size: 1.2rem;
  }
  
`;

export default GlobalStyle;
