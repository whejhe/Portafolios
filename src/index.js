import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRouter from './routes/AppRouter.js';
import { createRoot } from 'react-dom/client';
import './i18n.js';


createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

