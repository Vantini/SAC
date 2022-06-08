import React, { useState } from "react";
import "./App.css";
import "./index.css"
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, blueTheme, GlobalStyles } from "./themes.js";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("blue") : setTheme("light");
  
  
  } 
  
  var tamanho = 16;
  function aumentar(){
   
    tamanho++;
    document.body.style.fontSize=tamanho+"px";
  }
  function diminuir(){
    tamanho--;
    document.body.style.fontSize=tamanho+"px";
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : blueTheme}>
      <GlobalStyles />
      <StyledApp>
      <h1>Teste cor de texto</h1>
        <button onClick={() => themeToggler()}>modo de alto contraste</button>
        <button onClick={() => aumentar()}>aumentar texto</button>
        <button onClick={() => diminuir()}>diminuir texto</button>
        
      </StyledApp>
    </ThemeProvider>
  );

  }
export default App;
