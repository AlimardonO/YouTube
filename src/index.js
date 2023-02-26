import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<BrowserRouter>
  <App/>
</BrowserRouter>)