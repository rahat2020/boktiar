import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { ThemeProvider } from './Context/Context';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

