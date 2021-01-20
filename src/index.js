import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import JobContextProvider from './contexts/JobContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <JobContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
