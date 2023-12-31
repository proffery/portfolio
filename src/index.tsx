import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles theme={theme}/>
  </ThemeProvider>
);
