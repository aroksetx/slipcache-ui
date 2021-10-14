import {createGlobalStyle} from 'styled-components';
import {theme} from './ApplicationTheme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.lightMud};
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
