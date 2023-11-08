import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-green: #97ce4c; 
    --color-pink: #e89ac7; 
    --color-brown: #44281d;
    --color-darkgreen: #74C043;
    --color-beige: #e4a788;
  }

  body {
    font-family: Creepster, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    background: url('https://raw.githubusercontent.com/manualdodev/memory-game/main/images/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1{
    text-align: center;
  }
  
  h1 > strong{
    color: var(--color-green);
  }

  a{
    color: none;
    text-decoration: none;
  }

`