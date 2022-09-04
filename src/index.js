import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { ThemeProvider } from './Context/Context';
// import { AuthContextProvider } from './Context/AuthContext';
// import { ThemeProvider } from './Context/Context';

ReactDOM.render(
 
    <AuthContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthContextProvider>,
  document.getElementById('root')
  // <React.StrictMode>
  //   <ThemeProvider>
  //     <App />
  //   </ThemeProvider>
  // </React.StrictMode>,
  // document.getElementById('root')
);

