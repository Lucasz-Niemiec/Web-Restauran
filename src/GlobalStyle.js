import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



*{
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
  

}


body{
    width: auto;
    min-height: 100vh;
    background:white;
   
    font-family: 'Open Sans', sans-serif;
    
    h1{font-size:${({ theme }) => theme.font_large};}
}


`;
