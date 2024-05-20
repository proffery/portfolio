import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { themeObj } from './common/const/themeObj';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themeObj}>
    <App />
    <GlobalStyles theme={themeObj}/>
  </ThemeProvider>
);
