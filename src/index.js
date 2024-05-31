import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routes/AppRouter.js';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

