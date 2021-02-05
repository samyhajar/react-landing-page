import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const globalStyles = css`
  body {
    margin-top: 0px;
    font-family: Helvetica, sans-serif;
    margin-left: 0px;
    padding-left: 0px;
    border-left: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
