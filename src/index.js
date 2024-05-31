import React from 'react';
import './index.css';
import AppRouter from './routes/AppRouter.js';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

