import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  *, html * {
    scrollbar-width: 6px;
    scrollbar-color: #4F27BF;
  }

  *::-webkit-scrollbar,
  html *::-webkit-scrollbar {
    height: 127px;
    width: 6px;
  }

  *::-webkit-scrollbar-thumb,
  html *::-webkit-scrollbar-thumb {
    background-color: #4F27BF;
    border-radius: 5px;
  }  
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
