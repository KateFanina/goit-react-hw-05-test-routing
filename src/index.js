import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import './index.css';

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
    </BrowserRouter> 
  </React.StrictMode>
);
