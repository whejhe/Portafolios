import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from '../src/pages/Home.js';  // Asegúrate de que la ruta sea correcta
import { createRoot } from 'react-dom/client';
import './i18n.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
